import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PracticeSingleChoiceQuestion from '#models/practice_single_choice_question'

export default class extends BaseSeeder {
  async run() {
    await PracticeSingleChoiceQuestion.updateOrCreateMany(['practiceId', 'question'], [
      // JavaScript Basics Quiz Questions
      {
        id: 1,
        practiceId: 1,
        question: 'What is JavaScript primarily used for?',
        imageUrl: '',
      },
      {
        id: 2,
        practiceId: 1,
        question: 'Which of these is a valid JavaScript variable declaration?',
        imageUrl: '',
      },
      
      // Functions Practice Questions
      {
        id: 3,
        practiceId: 2,
        question: 'What is the difference between function declaration and function expression?',
        imageUrl: '',
      },
      {
        id: 4,
        practiceId: 2,
        question: 'What is an arrow function in JavaScript?',
        imageUrl: '',
      },

      // Types Quiz Questions
      {
        id: 5,
        practiceId: 3,
        question: 'What is the purpose of TypeScript interfaces?',
        imageUrl: '',
      },
      {
        id: 6,
        practiceId: 3,
        question: 'What is type inference in TypeScript?',
        imageUrl: '',
      },

      // Advanced Types Practice Questions
      {
        id: 7,
        practiceId: 4,
        question: 'What is a union type in TypeScript?',
        imageUrl: '',
      },
      {
        id: 8,
        practiceId: 4,
        question: 'What are generic types in TypeScript?',
        imageUrl: '',
      }
    ])
  }
}