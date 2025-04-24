import vine from '@vinejs/vine'

/**
 * Validator for creating a new user
 */
export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine.string().minLength(8),
    fullName: vine.string().trim().optional()
  })
)

/**
 * Validator for updating a user
 */
export const updateUserValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    fullName: vine.string().trim().optional()
  })
)