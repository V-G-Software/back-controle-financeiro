import { findByEmail } from '@/domains/users'
import type {
  Auth,
  MutationLoginArgs,
  RequireFields,
  ResolverFn,
  ResolverTypeWrapper
} from './../../../types.generated'
import { isMatch } from '@/domains'
import { sign } from 'jsonwebtoken'
import { type Context } from '@/server/context'
import { ENV } from '@/server/config'
export const login: ResolverFn<
  ResolverTypeWrapper<string>,
  {},
  Context,
  RequireFields<MutationLoginArgs, 'email' | 'password'>
> = async (_parent, { email, password }, { database }) => {
  const user = await findByEmail(database, email)

  const isValidPassword = await isMatch(password, user.password)
  if (!isValidPassword) {
    throw new Error('Unauthorized')
  }

  const payload = { userId: user.id, username: user.name, email: user.email }

  return sign(payload, ENV.JWT_SECRET, { expiresIn: '2h' })
}
