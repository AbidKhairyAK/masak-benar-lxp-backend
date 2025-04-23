import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PracticeSingleChoiceUserAnswer from '#models/practice_single_choice_user_answer'

export default class extends BaseSeeder {
  async run() {
    await PracticeSingleChoiceUserAnswer.updateOrCreateMany(['userId', 'questionId', 'selectedOptionId'], [
      // User 1 answers for JavaScript Basics Quiz (Practice 1)
      {
        userId: 1,
        questionId: 1,
        selectedOptionId: 1, // Correct answer
        isCorrect: true
      },
      {
        userId: 1,
        questionId: 2,
        selectedOptionId: 7, // Wrong answer
        isCorrect: false
      },

      // User 2 answers for JavaScript Basics Quiz (Practice 1)
      {
        userId: 2,
        questionId: 1,
        selectedOptionId: 1, // Correct answer
        isCorrect: true
      },
      {
        userId: 2,
        questionId: 2,
        selectedOptionId: 5, // Correct answer
        isCorrect: true
      },

      // User 1 answers for Functions Practice (Practice 2)
      {
        userId: 1,
        questionId: 3,
        selectedOptionId: 9, // Correct answer
        isCorrect: true
      },
      {
        userId: 1,
        questionId: 4,
        selectedOptionId: 13, // Correct answer
        isCorrect: true
      },

      // User 2 answers for Types Quiz (Practice 3)
      {
        userId: 2,
        questionId: 5,
        selectedOptionId: 17, // Correct answer
        isCorrect: true
      },
      {
        userId: 2,
        questionId: 6,
        selectedOptionId: 23, // Wrong answer
        isCorrect: false
      },

      // User 3 answers for Advanced Types Practice (Practice 4)
      {
        userId: 1,
        questionId: 7,
        selectedOptionId: 25, // Correct answer
        isCorrect: true
      },
      {
        userId: 1,
        questionId: 8,
        selectedOptionId: 29, // Correct answer
        isCorrect: true
      }
    ])
  }
} 