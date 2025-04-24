import type { HttpContext } from '@adonisjs/core/http'
import Course from '#models/course'
import { createCourseValidator, updateCourseValidator } from '#validators/course'

export default class CoursesController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    
    const courses = await Course.query()
      .preload('instructor')
      .paginate(page, limit)
    
    return courses
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const data = await request.validateUsing(createCourseValidator)
    const course = await Course.create(data)
    
    await course.load('instructor')
    return course
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const course = await Course.findOrFail(params.id)
    await course.load('instructor')
    return course
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ request, params }: HttpContext) {
    const course = await Course.findOrFail(params.id)
    const data = await request.validateUsing(updateCourseValidator)
    
    await course.merge(data).save()
    await course.load('instructor')
    return course
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const course = await Course.findOrFail(params.id)
    await course.delete()
    return course
  }
}