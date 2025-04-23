import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Topic from '#models/topic'
import PracticeSingleChoiceQuestion from '#models/practice_single_choice_question'
import PracticeSingleChoiceUserResult from '#models/practice_single_choice_user_result'

export default class Practice extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare topicId: number

  @column()
  declare title: string

  @column()
  declare description: string | null

  @column()
  declare type: 'single_choice' | 'code_challenge' | 'open_question'

  @belongsTo(() => Topic)
  declare topic: BelongsTo<typeof Topic>

  @hasMany(() => PracticeSingleChoiceQuestion)
  declare singleChoiceQuestions: HasMany<typeof PracticeSingleChoiceQuestion>

  @hasMany(() => PracticeSingleChoiceUserResult)
  declare singleChoiceResults: HasMany<typeof PracticeSingleChoiceUserResult>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}