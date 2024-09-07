import type {
  QueryResolvers,
  User,
} from "./../../../generated/types.generated.d";
export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  { id },
  { database },
) => {
  const result = await database("users").where({ id }).first<User>("*");
  if (!result) {
    throw new Error(`User with id ${id} not found`);
  }
  return result;
};
