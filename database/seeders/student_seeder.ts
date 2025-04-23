import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Student from '#models/student'

export default class extends BaseSeeder {
  async run() {
    await Student.updateOrCreateMany('userId', [
      {
        id: 1,
        userId: 2,
        someInfo: 'Enthusiastic student eager to learn'
      }
    ])
  }
}