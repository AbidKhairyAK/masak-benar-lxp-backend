import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Topic from '#models/topic'

export default class extends BaseSeeder {
  async run() {
    await Topic.updateOrCreateMany(['chapterId', 'title'], [
      // Chapter 1 Topics (JavaScript Intro)
      {
        id: 1,
        chapterId: 1,
        title: 'What is JavaScript?',
        sortOrder: 1,
        type: 'lesson'
      },
      {
        id: 2,
        chapterId: 1,
        title: 'JavaScript Basics Quiz',
        sortOrder: 2,
        type: 'practice'
      },
      // Chapter 2 Topics (JavaScript Practice)
      {
        id: 3,
        chapterId: 2,
        title: 'Working with Functions',
        sortOrder: 1,
        type: 'lesson'
      },
      {
        id: 4,
        chapterId: 2,
        title: 'Functions Practice',
        sortOrder: 2,
        type: 'practice'
      },
      // Chapter 3 Topics (TypeScript Essentials)
      {
        id: 5,
        chapterId: 3,
        title: 'TypeScript Types',
        sortOrder: 1,
        type: 'lesson'
      },
      {
        id: 6,
        chapterId: 3,
        title: 'Types Quiz',
        sortOrder: 2,
        type: 'practice'
      },
      // Chapter 4 Topics (Advanced TypeScript)
      {
        id: 7,
        chapterId: 4,
        title: 'Advanced Types',
        sortOrder: 1,
        type: 'lesson'
      },
      {
        id: 8,
        chapterId: 4,
        title: 'Advanced Types Practice',
        sortOrder: 2,
        type: 'practice'
      }
    ])
  }
}