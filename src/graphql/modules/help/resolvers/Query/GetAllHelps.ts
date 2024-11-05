import type { QueryResolvers } from './../../../types.generated'
export const GetAllHelps: NonNullable<QueryResolvers['GetAllHelps']> = async (
  _parent,
  _arg,
  ctx
) => {
 const { database } = ctx

 return database('help')
}
