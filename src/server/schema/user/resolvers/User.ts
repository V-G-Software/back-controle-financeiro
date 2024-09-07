import type { UserResolvers } from "./../../generated/types.generated.d";
export const User: UserResolvers = {
  isAdmin: (user) => user.administrator,
};
