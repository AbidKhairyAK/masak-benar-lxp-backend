import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import PracticeSingleChoiceQuestion from '#models/practice_single_choice_question'
import PracticeSingleChoiceOption from '#models/practice_single_choice_option'

export default class PracticeSingleChoiceUserAnswer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare questionId: number

  @column()
  declare selectedOptionId: number

  @column()
  declare isCorrect: boolean

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => PracticeSingleChoiceQuestion)
  declare question: BelongsTo<typeof PracticeSingleChoiceQuestion>

  @belongsTo(() => PracticeSingleChoiceOption)
  declare selectedOption: BelongsTo<typeof PracticeSingleChoiceOption>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}