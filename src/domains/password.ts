import { hash } from "bcrypt";
import { env } from "../infra/config";

const salt = 10;

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, salt);
}
