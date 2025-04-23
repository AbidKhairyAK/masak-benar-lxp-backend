import { BaseSeeder } from '@adonisjs/lucid/seeders'
import LessonVideo from '#models/lesson_video'

export default class extends BaseSeeder {
  async run() {
    await LessonVideo.updateOrCreateMany('lessonId', [
      {
        id: 1,
        lessonId: 1,
        videoUrl: 'https://example.com/videos/javascript-intro.mp4'
      },
      {
        id: 2,
        lessonId: 4,
        videoUrl: 'https://example.com/videos/advanced-typescript-types.mp4'
      }
    ])
  }
}