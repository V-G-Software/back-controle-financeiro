import { Context } from '@/server/context'
import type { QueryGetUserArgs, RequireFields, ResolverFn, ResolverTypeWrapper, User } from './../../../types.generated'
import { applyFindOne } from '@/support/crud/findOne'
export const getUser: ResolverFn<ResolverTypeWrapper<User>, {}, Context, RequireFields<QueryGetUserArgs, "id">> = async (
  _parent,
  { id },
  ctx
) => {
  return applyFindOne<User>(ctx, 'users', id, ['*'])
}
