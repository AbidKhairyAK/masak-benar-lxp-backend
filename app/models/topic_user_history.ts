import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Topic from '#models/topic'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class TopicUserHistory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare topicId: number

  @column()
  declare userId: number

  @belongsTo(() => Topic)
  declare topic: BelongsTo<typeof Topic>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}