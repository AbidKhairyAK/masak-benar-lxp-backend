import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PracticeSingleChoiceUserResult from '#models/practice_single_choice_user_result'

export default class extends BaseSeeder {
  async run() {
    await PracticeSingleChoiceUserResult.updateOrCreateMany(['userId', 'practiceId'], [
      // User 1 results
      {
        userId: 1,
        practiceId: 1, // JavaScript Basics Quiz
        correctQuestions: 1, // Got 1 out of 2 correct
        totalQuestions: 2
      },
      {
        userId: 1,
        practiceId: 2, // Functions Practice
        correctQuestions: 2, // Got all correct
        totalQuestions: 2
      },

      // User 2 results
      {
        userId: 2,
        practiceId: 1, // JavaScript Basics Quiz
        correctQuestions: 2, // Got all correct
        totalQuestions: 2
      },
      {
        userId: 2,
        practiceId: 3, // Types Quiz
        correctQuestions: 1, // Got 1 out of 2 correct
        totalQuestions: 2
      },

      // User 1 results
      {
        userId: 1,
        practiceId: 4, // Advanced Types Practice
        correctQuestions: 2, // Got all correct
        totalQuestions: 2
      }
    ])
  }
} 