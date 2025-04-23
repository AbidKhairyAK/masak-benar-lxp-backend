import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Practice from '#models/practice'

export default class extends BaseSeeder {
  async run() {
    await Practice.updateOrCreateMany(['topicId', 'title'], [
      {
        id: 1,
        topicId: 2,
        title: 'JavaScript Basics Quiz',
        type: 'single_choice'
      },
      {
        id: 2,
        topicId: 4,
        title: 'Functions Practice',
        type: 'single_choice'
      },
      {
        id: 3,
        topicId: 6,
        title: 'Types Quiz',
        type: 'single_choice'
      },
      {
        id: 4,
        topicId: 8,
        title: 'Advanced Types Practice',
        type: 'single_choice'
      }
    ])
  }
}