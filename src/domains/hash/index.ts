import { hash as bcryptHash, compare } from "bcrypt";

// import { config } from '@infra/config';
const salt = 10; //||config.SALT_OR_ROUNDS;

export async function isMatch(
  password: string,
  hash: string,
): Promise<boolean> {
  return await compare(password, hash);
}

export async function hash(password: string): Promise<string> {
  return await bcryptHash(password, salt);
}
