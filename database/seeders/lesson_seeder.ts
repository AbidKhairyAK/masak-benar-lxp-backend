import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Lesson from '#models/lesson'

export default class extends BaseSeeder {
  async run() {
    await Lesson.updateOrCreateMany(['topicId', 'title'], [
      {
        id: 1,
        topicId: 1,
        title: 'What is JavaScript?',
        type: 'video'
      },
      {
        id: 2,
        topicId: 3,
        title: 'Working with Functions',
        type: 'article'
      },
      {
        id: 3,
        topicId: 5,
        title: 'TypeScript Types',
        type: 'pdf'
      },
      {
        id: 4,
        topicId: 7,
        title: 'Advanced Types',
        type: 'video'
      }
    ])
  }
}