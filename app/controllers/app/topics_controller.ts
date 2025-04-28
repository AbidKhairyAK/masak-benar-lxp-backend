import Topic from '#models/topic'
import type { HttpContext } from '@adonisjs/core/http'

export default class TopicsController {
  /**
   * Show topic content based on topic ID
   */
  async show({ params, response }: HttpContext) {
    const topic = await Topic.query()
      .where('id', params.id)
      .preload('lesson')
      .firstOrFail()

    // Get the lesson's content based on type
    let lesson = null
    if (topic.lesson) {
      let content = null
      
      // Load the appropriate content based on lesson type
      if (topic.lesson.type === 'video') {
        content = await topic.lesson.related('video').query().first()
      } else if (topic.lesson.type === 'pdf') {
        content = await topic.lesson.related('pdf').query().first()
      } else if (topic.lesson.type === 'article') {
        content = await topic.lesson.related('article').query().first()
      }
      
      // Format the lesson data
      lesson = {
        id: topic.lesson.id,
        type: topic.lesson.type,
        [topic.lesson.type]: content
      }
    }

    // Load practice content if available
    const practice = await topic.related('practices').query().first()

    return response.json({
      id: topic.id,
      title: topic.title,
      lesson: lesson,
      practice: practice || null,
    })
  }
}