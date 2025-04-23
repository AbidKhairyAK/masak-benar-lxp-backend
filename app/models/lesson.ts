import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Topic from '#models/topic'
import LessonVideo from '#models/lesson_video'
import LessonPdf from '#models/lesson_pdf'
import LessonArticle from '#models/lesson_article'

export default class Lesson extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare topicId: number

  @column()
  declare title: string

  @column()
  declare type: 'video' | 'pdf' | 'article'

  @belongsTo(() => Topic)
  declare topic: BelongsTo<typeof Topic>

  @hasOne(() => LessonVideo)
  declare video: HasOne<typeof LessonVideo>

  @hasOne(() => LessonPdf)
  declare pdf: HasOne<typeof LessonPdf>

  @hasOne(() => LessonArticle)
  declare article: HasOne<typeof LessonArticle>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}