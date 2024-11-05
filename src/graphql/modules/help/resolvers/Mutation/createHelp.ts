import { type Context } from '@/server/context'
import type { Help, HelpInput, MutationCreateHelpArgs, MutationResolvers, RequireFields, ResolverFn, ResolverTypeWrapper } from './../../../types.generated'
import { STATUS_HELP } from '@/domains/help/constants'
import { applyInsert } from '@/support/crud/add'
export const createHelp: ResolverFn<ResolverTypeWrapper<boolean>, {}, Context, RequireFields<MutationCreateHelpArgs, "data">> = async (
  _parent,
  {data},
  ctx
) => {
  /* Implement Mutation.createHelp resolver logic here */

  const { title, description } = data
  const { user } = ctx

  if (!user) {
    throw new Error("Unauthorized")
  }

  const help = { title, description, status: STATUS_HELP.SOLICITADO, client_created_id: user.id }

  const some = await applyInsert<HelpInput>(ctx, 'help', help)

  return some
}
