import { applyUpdate } from '@/support/crud/edit'
import type { HelpInput, InputMaybe, MutationResolvers } from './../../../types.generated'
export const editHelp: NonNullable<MutationResolvers['editHelp']> = async (
  _parent,
  { data, id },
  ctx
) => {
  return applyUpdate<Record<string, string | number>, InputMaybe<HelpInput> | undefined>(ctx, 'help', { id }, data)
}
