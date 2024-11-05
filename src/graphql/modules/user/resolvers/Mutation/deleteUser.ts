import { applyDelete } from '@/support/crud/delete'
import type { MutationDeleteUserArgs, RequireFields, ResolverFn, ResolverTypeWrapper } from './../../../types.generated'
import { type Context } from '@/server/context'
export const deleteUser: ResolverFn<ResolverTypeWrapper<boolean>, {}, Context, RequireFields<MutationDeleteUserArgs, "id">> = async (
  _parent,
  { id },
  ctx
) => {
  return applyDelete<Record<string, number | string>>(ctx, 'users', false, { id })
}
