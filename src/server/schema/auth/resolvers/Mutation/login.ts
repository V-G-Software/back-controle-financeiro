import { sign } from "jsonwebtoken";

import { isMatch } from "@/domains/hash";
import type { MutationResolvers } from "./../../../generated/types.generated.d";
import { findByEmail } from "@/domains/users";
import { env } from "@/infra/config";

export const login: NonNullable<MutationResolvers["login"]> = async (
  _parent,
  { email, password },
  { database },
) => {
  const user = await findByEmail(database, email);
  console.log({ user });

  const isValidPassword = await isMatch(password, user.password);
  if (!isValidPassword) {
    throw new Error("Unauthorized");
  }

  const payload = { userId: user.id, username: user.name, email: user.email };

  return {
    token: sign(payload, env.JWT_SECRET),
  };
};
