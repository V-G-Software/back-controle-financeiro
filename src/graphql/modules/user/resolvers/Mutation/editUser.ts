import { type Context } from '@/server/context'
import type { MutationEditUserArgs, RequireFields, ResolverFn, ResolverTypeWrapper, UserInput } from './../../../types.generated'
import { applyUpdate } from '@/support/crud/edit'
export const editUser: ResolverFn<ResolverTypeWrapper<boolean>, {}, Context, RequireFields<MutationEditUserArgs, "data" | "id">> = async (
  _parent,
  { data, id },
  ctx
) => {
  return applyUpdate<Record<string, string | number>, UserInput>(ctx, 'users', { id }, data)
}
