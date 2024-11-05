import { MutationAutorizarUserArgs, MutationCreateUserArgs, RequireFields, ResolverFn } from "@/graphql/modules/types.generated";
import { Context } from "@/server/context";

export const autorizarUser: ResolverFn<boolean, {}, Context, RequireFields<MutationAutorizarUserArgs, "id">> = async (_parent, { id }, ctx) => {
  const { database } = ctx

  return database('users').where({ id }).update({ autorizado: true })
}
