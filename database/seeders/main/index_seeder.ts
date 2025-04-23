import { BaseSeeder } from '@adonisjs/lucid/seeders'
import app from '@adonisjs/core/services/app'

export default class MainSeeder extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in a environment specified in Seeder
	 * TODO: nanti gw atur
     */
    /* if (
      !Seeder.default.environment ||
      (!Seeder.default.environment.includes('development') && app.inDev) ||
      (!Seeder.default.environment.includes('testing') && app.inTest) ||
      (!Seeder.default.environment.includes('production') && app.inProduction)
    ) {
      return
    } */

    await new Seeder.default(this.client).run()
  }

  async run() {
    // Users and roles first
    await this.seed(await import('#database/seeders/user_seeder'))
    await this.seed(await import('#database/seeders/instructor_seeder'))
    await this.seed(await import('#database/seeders/student_seeder'))

    // Course structure
    await this.seed(await import('#database/seeders/course_seeder'))
    await this.seed(await import('#database/seeders/chapter_seeder'))
    await this.seed(await import('#database/seeders/topic_seeder'))

    // Lessons and their content
    await this.seed(await import('#database/seeders/lesson_seeder'))
    await this.seed(await import('#database/seeders/lesson_video_seeder'))
    await this.seed(await import('#database/seeders/lesson_article_seeder'))
    await this.seed(await import('#database/seeders/lesson_pdf_seeder'))

    // Practice content
    await this.seed(await import('#database/seeders/practice_seeder'))
    await this.seed(await import('#database/seeders/practice_single_choice_question_seeder'))
    await this.seed(await import('#database/seeders/practice_single_choice_option_seeder'))
    await this.seed(await import('#database/seeders/practice_single_choice_user_answer_seeder'))
    await this.seed(await import('#database/seeders/practice_single_choice_user_result_seeder'))
  }
} 