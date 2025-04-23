import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Lesson from '#models/lesson'

export default class LessonPdf extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare lessonId: number

  @column()
  declare pdfUrl: string

  @belongsTo(() => Lesson)
  declare lesson: BelongsTo<typeof Lesson>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}