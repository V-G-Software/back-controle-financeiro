import { type Knex } from 'knex'
import { randomUUID } from 'crypto'
import { type Logger } from 'pino'

import type { ApolloFastifyContextFunction } from '@as-integrations/fastify'

import { type Dataloaders, buildDataloaders } from './context/dataloaders'
import { type ContextServices } from './context/contracts'
import { serviceManager } from './context/services'
import { createConnection } from '../infra/db'
import { fileManager } from '../infra/config'
import { rootLogger } from '../infra/logger'
import { type Models, buildModels } from './context/models'
import { User } from '@/graphql/modules/types.generated'
import { IncomingHttpHeaders } from 'http'

interface Context {
  headers: IncomingHttpHeaders
  user?: User
  database: Knex
  dataloaders: Dataloaders
  logger: Logger
  services: ContextServices
  models: Models
}

const conn = createConnection()
const dataloaders = buildDataloaders(conn)
const models = buildModels(conn)
const traceID = randomUUID()
const services = serviceManager(fileManager)

interface NewBody {
  query: string
  operationName: string
}

const contextBuilder: ApolloFastifyContextFunction<Context> = async ({
  body,
  headers
}) => {
  const database = conn

  const { operationName } = body as NewBody

  const logger = rootLogger.child({
    traceID,
    operationName
  })

  return {
    headers,
    database,
    logger,
    dataloaders,
    models,
    traceID,
    services
  }
}

export { contextBuilder, type Context }
