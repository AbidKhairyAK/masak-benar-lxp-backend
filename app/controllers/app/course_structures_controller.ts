import { HttpContext } from '@adonisjs/core/http'
import Chapter from '#models/chapter'

export default class CourseStructureController {
  /**
   * Get the structure of a chapters and topics of a course
   */
  async show({ params }: HttpContext) {
    const chapters = await Chapter.query()
      .select(['id', 'title', 'sort_order'])
      .where('course_id', params.id)
      .orderBy('sort_order')
      .preload('topics', (topicQuery) => {
        topicQuery
          .select(['id', 'title'])
          .orderBy('sort_order')
          .preload('lesson', (lessonQuery) => {
            lessonQuery.select(['type'])
          })
		  .preload('practice', (practiceQuery) => {
			practiceQuery.select(['type'])
		  })
      })

    return chapters
  }
}
