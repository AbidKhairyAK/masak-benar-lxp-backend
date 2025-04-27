import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.updateOrCreateMany('email', [
      {
        id: 1,
        email: 'instructor@example.com',
        password: 'password',
        fullName: 'John Instructor'
      },
      {
        id: 2,
        email: 'student@example.com',
        password: 'password',
        fullName: 'Jane Student'
      }
    ])
  }
}