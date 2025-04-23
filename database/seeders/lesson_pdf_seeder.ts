import { BaseSeeder } from '@adonisjs/lucid/seeders'
import LessonPdf from '#models/lesson_pdf'

export default class extends BaseSeeder {
  async run() {
    await LessonPdf.updateOrCreateMany('lessonId', [
      {
        id: 1,
        lessonId: 3,
        pdfUrl: 'https://example.com/pdfs/typescript-types-guide.pdf'
      }
    ])
  }
}