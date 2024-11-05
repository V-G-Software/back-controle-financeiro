import { hash, compare } from 'bcrypt'
const salt = 10

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, salt)
}

export async function isMatch(
  password: string,
  hash: string
): Promise<boolean> {
  return await compare(password, hash)
}
