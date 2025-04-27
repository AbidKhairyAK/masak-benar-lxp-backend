import Course from '#models/course'
import type { HttpContext } from '@adonisjs/core/http'

export default class CoursesController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    
    const courses = await Course.query()
      .select('id', 'instructor_id', 'title')
      .preload('instructor', query => {
        query.select('id', 'user_id')
        query.preload('user', query => {
          query.select('id', 'name', 'email')
        })
      })
      .withCount('topics', query => {
        query.as('topic_count')
      })
      .withCount('topics', query => {
        query.where('type', 'lesson').as('lesson_count')
      })
      .withCount('topics', query => {
        query.where('type', 'practice').as('practice_count')
      })
      .paginate(page, limit)
    
    return courses
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const course = Course.query()
      .where('id', params.id)
      .preload('instructor', query => {
        query
          .select('id', 'user_id')
          .preload('user', query => {
            query
              .select('id', 'name', 'email')
          })
      })
      .preload('chapters', query => {
        query
          .select('id', 'course_id', 'title', 'sort_order')
          .orderBy('sort_order')
          .preload('topics', query => {
            query
              .select('id', 'chapter_id', 'title', 'type', 'sort_order')
              .orderBy('sort_order')
          })
      })
      .firstOrFail()

    return course
  }
}