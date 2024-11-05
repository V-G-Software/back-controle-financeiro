
import { User } from "@/graphql/modules/types.generated";
import type { Knex } from "knex";

export async function findByEmail(
  database: Knex,
  email: string,
): Promise<User> {
  return database("users").where({ email, autorizado: true }).first<User>("*");
}
