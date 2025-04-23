import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Chapter from '#models/chapter'

export default class extends BaseSeeder {
  async run() {
    await Chapter.updateOrCreateMany(['courseId', 'title'], [
      {
        id: 1,
        courseId: 1,
        title: 'Introduction to JavaScript',
        sortOrder: 1
      },
      {
        id: 2,
        courseId: 1,
        title: 'JavaScript in Practice',
        sortOrder: 2
      },
      {
        id: 3,
        courseId: 2,
        title: 'TypeScript Essentials',
        sortOrder: 1
      },
      {
        id: 4,
        courseId: 2,
        title: 'Advanced TypeScript Patterns',
        sortOrder: 2
      }
    ])
  }
}