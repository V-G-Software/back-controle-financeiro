import type {
  QueryResolvers,
  User,
} from "./../../../generated/types.generated.d";
export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _arg,
  { database },
) => {
  return database("users").select<User[]>("*");
};
