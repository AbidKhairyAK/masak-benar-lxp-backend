import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, belongsTo, hasManyThrough } from '@adonisjs/lucid/orm'
import type { HasMany, BelongsTo, HasManyThrough } from '@adonisjs/lucid/types/relations'
import Chapter from '#models/chapter'
import Topic from '#models/topic'
import CourseEnrollment from '#models/course_enrollment'
import Instructor from '#models/instructor'

export default class Course extends BaseModel {
  serializeExtras () {
    return {
      chapter_count: this.$extras.chapter_count,
      topic_count: this.$extras.topic_count,
      lesson_count: this.$extras.lesson_count,
      practice_count: this.$extras.practice_count,
    }
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare instructorId: number

  @column()
  declare title: string

  @column()
  declare caption: string

  @column()
  declare description: string

  @belongsTo(() => Instructor)
  declare instructor: BelongsTo<typeof Instructor>

  @hasMany(() => Chapter)
  declare chapters: HasMany<typeof Chapter>

  @hasMany(() => CourseEnrollment)
  declare enrollments: HasMany<typeof CourseEnrollment>

  @hasManyThrough([() => Topic, () => Chapter])
  declare topics: HasManyThrough<typeof Topic>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}