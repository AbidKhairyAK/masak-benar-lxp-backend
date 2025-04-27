import User from '#models/user'
import vine from '@vinejs/vine'

/**
 * Validator for user registration
 */
export const registerValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim().unique(async (_, value) => {
      const user = await User.query()
        .where('email', value)
        .first()
      return !user
    }),
    password: vine.string().minLength(8),
    name: vine.string().trim(),
  })
)

/**
 * Validator for user login
 */
export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine.string()
  })
) 