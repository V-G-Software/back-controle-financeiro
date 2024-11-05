import { STATUS_HELP } from '@/domains/help/constants'
import type { MutationResolvers } from './../../../types.generated'
export const initAtendimento: NonNullable<
  MutationResolvers['initAtendimento']
> = async (_parent, { id },
  ctx
) => {
  const { user, database } = ctx

  if (!user) {
    throw new Error("Unauthorized")
  }

  return await database('help').where({id}).update({ status: STATUS_HELP.ANDAMENTO, user_updated_id: user.id})

}
