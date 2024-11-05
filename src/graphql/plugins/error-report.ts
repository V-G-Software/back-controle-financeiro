import { type GraphQLError } from 'graphql'
import { type FastifyInstance, type FastifyPluginOptions } from 'fastify'
import { unwrapResolverError } from '@apollo/server/errors'

import { ValidationError } from '@/errors'
import { isEmpty } from '@/support/utils'

const { LOG_LEVEL } = process.env

const errorReportPlugin = (app: FastifyInstance): FastifyPluginOptions => {
  const isInDebugMode = LOG_LEVEL === 'debug'

  return {
    async requestDidStart({ request }) {
      const logCtx: Record<string, unknown> = {
        operationName: request.operationName
      }

      if (isInDebugMode) {
        logCtx.req = {
          method: request.http?.method,
          headers: Object.fromEntries(request.http?.headers ?? [])
        }
      }

      app.log.info(logCtx, 'incoming request')

      return {
        async willSendResponse({ response, errors }) {
          if (isInDebugMode) {
            logCtx.res = {
              statusCode: response.http.status,
              headers: Object.fromEntries(response.http?.headers ?? [])
            }
          }

          if (isEmpty(errors)) {
            app.log.info(logCtx, 'request completed')
            return
          }

          const [originalError] = errors as [GraphQLError]
          const error = unwrapResolverError(originalError) as Error
          const logMsg = error.message

          logCtx.error = error

          if (error instanceof ValidationError) {
            app.log.warn(logCtx, logMsg)
            return
          }

          app.log.error(logCtx, logMsg)
        }
      }
    }
  }
}

export { errorReportPlugin }
