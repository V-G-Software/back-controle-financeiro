import { type Context } from '@/server/context'
import type { MutationCreateUserArgs, RequireFields, ResolverFn, UserInput } from './../../../types.generated'
import { applyInsert } from '@/support/crud/add'
import { hashPassword } from '@/domains'
export const createUser: ResolverFn<boolean, {}, Context, RequireFields<MutationCreateUserArgs, 'data'>> = async (
  _parent,
  { data },
  ctx
) => {

  const user = {...data, password:  await hashPassword(data.password)}

  return applyInsert<UserInput>(ctx, 'users', user)
}
