import type { HttpContext } from '@adonisjs/core/http'
import Topic from '#models/topic'
import Course from '#models/course'
import Chapter from '#models/chapter'

export default class TopicNavigationsController {
  async show({ params }: HttpContext) {
    const topic = await Topic.query().where('id', params.id).preload('chapter').firstOrFail()

    const courseId = topic.chapter.courseId

    const chapters = await Chapter.query()
      .where('course_id', courseId)
      .orderBy('sort_order')
      .preload('topics', query => {
        query.orderBy('sort_order')
      })

	const allTopics = chapters.flatMap(chapter => chapter.topics)
    const currentIndex = allTopics.findIndex((t) => t.id === topic.id)

    // Determine the previous and next topics
    const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null
    const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null

    return {
      prev_topic_id: prevTopic ? prevTopic.id : null,
      next_topic_id: nextTopic ? nextTopic.id : null,
    }
  }
}
