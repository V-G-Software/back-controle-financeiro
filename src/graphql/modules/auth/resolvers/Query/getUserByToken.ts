import { verify } from 'jsonwebtoken'
import type { QueryResolvers } from './../../../types.generated'
import { ENV } from '@/server/config'
/**
 * Obtém um usuário pelo token de acesso
 * @param {Object} _parent - Parâmetro padrão do GraphQL, não usado aqui
 * @param {Object} { token } - Token de acesso JWT
 * @param {Object} ctx - Contexto do GraphQL, que contém o banco de dados
 * @returns {Promise<User>} - Usuário encontrado pelo token
 */
export const getUserByToken: NonNullable<
  QueryResolvers['getUserByToken']
> = async (_parent, { token }, ctx) => {
  const { userId } = verify(token, ENV.JWT_SECRET) as unknown as Record<
    string,
    string | number
  >

  if (!userId) {
    throw new Error('Token inválido ou expirado')
  }

  const user = await ctx
    .database('users')
    .where({ id: userId })
    .first(['id', 'name', 'email', 'autorizado'])

  return user
}
