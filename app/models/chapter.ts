import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Course from '#models/course'
import Topic from '#models/topic'

export default class Chapter extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare courseId: number

  @column()
  declare title: string

  @column()
  declare sortOrder: number

  @belongsTo(() => Course)
  declare course: BelongsTo<typeof Course>

  @hasMany(() => Topic)
  declare topics: HasMany<typeof Topic>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}