import vine from '@vinejs/vine'

/**
 * Validator for user registration
 */
export const registerValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine.string().minLength(8),
    fullName: vine.string().trim().optional(),
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