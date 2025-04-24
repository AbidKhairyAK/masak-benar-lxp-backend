import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, belongsTo } from '@adonisjs/lucid/orm'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import Chapter from '#models/chapter'
import CourseEnrollment from '#models/course_enrollment'
import Instructor from '#models/instructor'

export default class Course extends BaseModel {
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

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}