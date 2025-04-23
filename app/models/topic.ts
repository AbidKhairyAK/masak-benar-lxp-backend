import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Chapter from '#models/chapter'
import Practice from '#models/practice'
import Lesson from '#models/lesson'

export default class Topic extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare chapterId: number

  @column()
  declare title: string

  @column()
  declare content: string

  @column()
  declare sortOrder: number

  @column()
  declare type: 'lesson' | 'practice'

  @belongsTo(() => Chapter)
  declare chapter: BelongsTo<typeof Chapter>

  @hasMany(() => Practice)
  declare practices: HasMany<typeof Practice>

  @hasOne(() => Lesson)
  declare lesson: HasOne<typeof Lesson>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}