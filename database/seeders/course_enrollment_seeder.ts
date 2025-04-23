import CourseEnrollment from '#models/course_enrollment'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await CourseEnrollment.updateOrCreateMany(['userId', 'courseId'], [
      {
        id: 1,
        userId: 1,
        courseId: 1,
        isCompleted: true,
        completionPercentage: 100,
      },
      {
        id: 2,
        userId: 1,
        courseId: 2,
        isCompleted: false,
        completionPercentage: 90,
      },
      {
        id: 3,
        userId: 2,
        courseId: 1,
        isCompleted: false,
        completionPercentage: 90,
      },
      {
        id: 4,
        userId: 2,
        courseId: 2,
        isCompleted: true,
        completionPercentage: 100,
      },
    ])
  }
}