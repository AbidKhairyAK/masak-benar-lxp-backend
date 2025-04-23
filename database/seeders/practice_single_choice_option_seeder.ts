import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PracticeSingleChoiceOption from '#models/practice_single_choice_option'

export default class extends BaseSeeder {
  async run() {
    await PracticeSingleChoiceOption.updateOrCreateMany(['questionId', 'description'], [
      // Options for Question 1
      {
        id: 1,
        questionId: 1,
        description: 'Creating interactive and dynamic web content',
        isCorrect: true
      },
      {
        id: 2,
        questionId: 1,
        description: 'Styling web pages',
        isCorrect: false
      },
      {
        id: 3,
        questionId: 1,
        description: 'Creating database tables',
        isCorrect: false
      },
      {
        id: 4,
        questionId: 1,
        description: 'Managing server hardware',
        isCorrect: false
      },

      // Options for Question 2
      {
        id: 5,
        questionId: 2,
        description: 'let myVariable = 10;',
        isCorrect: true
      },
      {
        id: 6,
        questionId: 2,
        description: 'variable myVariable = 10;',
        isCorrect: false
      },
      {
        id: 7,
        questionId: 2,
        description: 'myVariable := 10;',
        isCorrect: false
      },
      {
        id: 8,
        questionId: 2,
        description: '#myVariable = 10;',
        isCorrect: false
      },

      // Options for Question 3
      {
        id: 9,
        questionId: 3,
        description: 'Function declarations are hoisted, function expressions are not',
        isCorrect: true
      },
      {
        id: 10,
        questionId: 3,
        description: 'There is no difference',
        isCorrect: false
      },
      {
        id: 11,
        questionId: 3,
        description: 'Function expressions are faster',
        isCorrect: false
      },
      {
        id: 12,
        questionId: 3,
        description: 'Function declarations use more memory',
        isCorrect: false
      },

      // Options for Question 4
      {
        id: 13,
        questionId: 4,
        description: 'A concise way to write function expressions with lexical this binding',
        isCorrect: true
      },
      {
        id: 14,
        questionId: 4,
        description: 'A function that points to another function',
        isCorrect: false
      },
      {
        id: 15,
        questionId: 4,
        description: 'A function that only returns arrows',
        isCorrect: false
      },
      {
        id: 16,
        questionId: 4,
        description: 'A deprecated way of writing functions',
        isCorrect: false
      },

      // Options for Question 5
      {
        id: 17,
        questionId: 5,
        description: 'To define a contract for object structure',
        isCorrect: true
      },
      {
        id: 18,
        questionId: 5,
        description: 'To create new objects',
        isCorrect: false
      },
      {
        id: 19,
        questionId: 5,
        description: 'To style components',
        isCorrect: false
      },
      {
        id: 20,
        questionId: 5,
        description: 'To connect to databases',
        isCorrect: false
      },

      // Options for Question 6
      {
        id: 21,
        questionId: 6,
        description: 'Automatic type detection based on value and usage',
        isCorrect: true
      },
      {
        id: 22,
        questionId: 6,
        description: 'Manual type assignment',
        isCorrect: false
      },
      {
        id: 23,
        questionId: 6,
        description: 'Type conversion at runtime',
        isCorrect: false
      },
      {
        id: 24,
        questionId: 6,
        description: 'Type removal for production',
        isCorrect: false
      },

      // Options for Question 7
      {
        id: 25,
        questionId: 7,
        description: 'A type that can be one of several types',
        isCorrect: true
      },
      {
        id: 26,
        questionId: 7,
        description: 'A type for unions only',
        isCorrect: false
      },
      {
        id: 27,
        questionId: 7,
        description: 'A type for combining objects',
        isCorrect: false
      },
      {
        id: 28,
        questionId: 7,
        description: 'A type for arrays only',
        isCorrect: false
      },

      // Options for Question 8
      {
        id: 29,
        questionId: 8,
        description: 'Types that work with multiple data types',
        isCorrect: true
      },
      {
        id: 30,
        questionId: 8,
        description: 'Types specific to generators',
        isCorrect: false
      },
      {
        id: 31,
        questionId: 8,
        description: 'Types for general use only',
        isCorrect: false
      },
      {
        id: 32,
        questionId: 8,
        description: 'Types that cannot be changed',
        isCorrect: false
      }
    ])
  }
}