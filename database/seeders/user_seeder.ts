import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    await User.updateOrCreateMany('email', [
      {
        id: 1,
        email: 'instructor@example.com',
        password: await hash.make('password'),
        fullName: 'John Instructor'
      },
      {
        id: 2,
        email: 'student@example.com',
        password: await hash.make('password'),
        fullName: 'Jane Student'
      }
    ])
  }
}