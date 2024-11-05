import fastifyApollo from '@as-integrations/fastify'
import { buildApolloServer } from './graphql/apollo'
import { buildServer } from './server/http-server'
import { rootLogger } from './infra/logger'

import { getSignal } from './infra/signal'
import { contextBuilder } from './server/context'

const main = async (): Promise<void> => {
  const server = await buildServer(
    {
      signal: getSignal()
    },
    async app => {
      const apollo = await buildApolloServer(app)
      await apollo.start()
      await app.register(fastifyApollo(apollo), {
        // @ts-expect-error - We must investigate this
        context: contextBuilder
      })
    },
    rootLogger
  )

  try {
    await server.start()
  } catch (err) {
    await server.stop().catch(() => {}) // ignore error
    await Promise.reject(err)
  }
}

main().catch(console.error)
