import type { UserResolvers } from './../../types.generated'
export const User: UserResolvers = {
  isAdmin: async (user, _, ctx) => {
    const userResult = await ctx.database('users').where({ id: user.id }).first('administrador')

    return userResult.administrador
  }
}
