import { Context } from '@/server/context'
import type { QueryResolvers, ResolverFn, ResolverTypeWrapper, User } from './../../../types.generated'
import { applyFindAll } from '@/support/crud/findAll'
export const loadUsers: ResolverFn<ResolverTypeWrapper<User>[], {}, Context, {}>= async (
  _parent,
  _arg,
  ctx
) => {
  return applyFindAll<User>(ctx, 'users', ['*'])
}
