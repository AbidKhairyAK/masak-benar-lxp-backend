import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Instructor from '#models/instructor'

export default class extends BaseSeeder {
  async run() {
    await Instructor.updateOrCreateMany('userId', [
      {
        id: 1,
        userId: 1,
        someInfo: 'Experienced instructor with 10+ years of teaching'
      }
    ])
  }
}