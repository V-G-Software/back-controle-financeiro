import { applyFindOne } from '@/support/crud/findOne'
import type { Help, QueryResolvers } from './../../../types.generated'
export const GetHelp: NonNullable<QueryResolvers['GetHelp']> = async (
  _parent,
  { id },
  ctx
) => {
  return applyFindOne<Help>(ctx, 'help', id, ['*'])
}
