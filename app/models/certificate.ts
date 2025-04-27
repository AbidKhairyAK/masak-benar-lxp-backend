import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import Course from '#models/course'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Certificate extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare courseId: number

  @column()
  declare certificateNumber: string

  @column()
  declare downloadUrl: string
  
  @column()
  declare isApproved: boolean
  
  @column.date()
  declare issuedDate: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Course)
  declare course: BelongsTo<typeof Course>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}