import { applyDelete } from '@/support/crud/delete'
import type { MutationResolvers } from './../../../types.generated'
export const deleteHelp: NonNullable<MutationResolvers['deleteHelp']> = async (
  _parent,
  { id },
  ctx
) => {
  return applyDelete<Record<string, number | string>>(ctx, 'help', true, { id })
}
