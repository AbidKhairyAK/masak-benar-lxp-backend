import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Course from '#models/course'

export default class extends BaseSeeder {
  async run() {
    await Course.updateOrCreateMany('title', [
      {
        id: 1,
        instructorId: 1,
        title: 'JavaScript Fundamentals',
        caption: 'Master the basics of JavaScript programming',
        description: 'A comprehensive course covering JavaScript fundamentals, from basic syntax to advanced concepts. Perfect for beginners!',
      },
      {
        id: 2,
        instructorId: 1,
        title: 'Advanced TypeScript Development',
        caption: 'Take your TypeScript skills to the next level',
        description: 'Deep dive into TypeScript features, design patterns, and best practices. For experienced developers who want to master TypeScript.',
      }
    ])
  }
}