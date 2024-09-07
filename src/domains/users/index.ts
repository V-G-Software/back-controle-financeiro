import { User } from "@/server/schema/generated/types.generated";
import type { Knex } from "knex";

export async function findByEmail(
  database: Knex,
  email: string,
): Promise<User> {
  return database("users").where({ email }).first<User>("*");
}
