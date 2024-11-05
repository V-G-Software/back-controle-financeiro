import type { BaseContext } from '@apollo/server'
import type { FastifyInstance } from 'fastify'

import { ApolloServer } from '@apollo/server'
import { unwrapResolverError } from '@apollo/server/errors'
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify'

import { resolvers } from './modules/resolvers.generated'
import { typeDefs } from './modules/typeDefs.generated'
import { AppError, ValidationError } from '@/errors'
import { errorReportPlugin } from './plugins/error-report'
import { defaultFieldResolver, GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils'
import { verify } from 'jsonwebtoken'
import { ENV } from '@/server/config'

function authDirectiveTransformer(schema: GraphQLSchema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: fieldConfig => {
      const authDirective = getDirective(schema, fieldConfig, 'auth')?.[0]
      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig

        fieldConfig.resolve = async function (...args) {
          const [, , context] = args

          const { headers, database } = context

          const authHeader = headers.authorization

          if (!authHeader) {
            return Promise.reject(ValidationError.build('Token não fornecido'))
          }

          const { userId } = verify(
            authHeader,
            ENV.JWT_SECRET
          ) as unknown as Record<string, string | number>

          console.log({ userId })

          if (!userId) {
            return Promise.reject(
              ValidationError.build('Token inválido ou expirado')
            )
          }

          const user = await database('users')
            .where({ id: userId, autorizado: true })
            .first()
            .select([
              'id',
              'name',
              'email',
              'phone',
              'cpf',
              'administrador',
              'autorizado'
            ])

          context.user = user

          return resolve.apply(this, args)
        }
      }
      return fieldConfig
    }
  })
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
const buildApolloServer = async (
  app: FastifyInstance
): Promise<ApolloServer<BaseContext>> => {
  const apollo = new ApolloServer<BaseContext>({
    // typeDefs,
    // resolvers,
    schema: authDirectiveTransformer(schema),
    plugins: [fastifyApolloDrainPlugin(app), errorReportPlugin(app)],
    formatError(formattedError, error) {
      const originalError = unwrapResolverError(error)
      if (originalError instanceof ValidationError) {
        return formattedError
      }

      return AppError.build('Ocorreu um erro inesperado')
    }
  })

  return apollo
}

export { buildApolloServer }
