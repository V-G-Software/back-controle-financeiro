/* eslint-disable @typescript-eslint/no-misused-promises */
import type { FastifyInstance, FastifyPluginAsync } from 'fastify'
import { createHttpTerminator } from 'http-terminator'
import { randomUUID } from 'node:crypto'
import { type Logger } from 'pino'
import fastify from 'fastify'
import cors from '@fastify/cors'

import { PORT, URL, ENV } from './config'
import { verify } from 'jsonwebtoken'

export const HEADER_REQUEST_ID = 'request-id'
export const HEADER_X_REQUEST_ID = 'X-Request-Id'
export const HEADER_X_REQUEST_ID_LOWER = HEADER_X_REQUEST_ID.toLowerCase()

export interface ServerOptions {
  signal: AbortSignal
}

export interface Server {
  start: () => Promise<void>
  stop: () => Promise<void>
  get: () => FastifyInstance
}

const buildServer = async (
  { signal }: ServerOptions,
  register: FastifyPluginAsync,
  rootLogger: Logger
): Promise<Server> => {
  const logger = rootLogger.child({
    context: 'http'
  })

  const app: FastifyInstance = fastify({
    logger,
    disableRequestLogging: false,
    requestIdLogLabel: 'requestId',
    requestIdHeader: HEADER_X_REQUEST_ID_LOWER,
    genReqId(req) {
      return (
        // fall back to non-x header or generate one
        (req.headers[HEADER_REQUEST_ID] as string) ?? `DSS:${randomUUID()}`
      )
    }
  })

  app.addHook('onSend', async (req, reply) => {
    void reply.header(HEADER_X_REQUEST_ID, req.id)
  })

  app.get('/.well-known/health', { logLevel: 'warn' }, () => ({
    status: 'OK'
  }))

  await app.register(register)
  await app.register(cors, {
    origin: URL
  })

  let stoping = false

  const httpTerminator = createHttpTerminator({
    server: app.server
  })

  const stop = async (): Promise<void> => {
    if (stoping) {
      return
    }

    stoping = true

    signal.removeEventListener('abort', stop)

    app.log.warn('stopping server')

    await httpTerminator.terminate().catch(err => {
      logger.warn({ err }, 'failed to stop server')
    })
  }

  return {
    stop,
    get() {
      return app
    },
    async start(port?: number) {
      await app.listen({
        host: '0.0.0.0',
        port: port ?? PORT
      })

      signal.addEventListener('abort', stop)
    }
  }
}

export { buildServer }
