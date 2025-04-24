import vine from '@vinejs/vine'

/**
 * Validator for creating a new course
 */
export const createCourseValidator = vine.compile(
  vine.object({
    instructorId: vine.number(),
    title: vine.string().trim(),
    caption: vine.string().trim(),
    description: vine.string().trim()
  })
)

/**
 * Validator for updating a course
 */
export const updateCourseValidator = vine.compile(
  vine.object({
    instructorId: vine.number(),
    title: vine.string().trim(),
    caption: vine.string().trim(),
    description: vine.string().trim()
  })
)