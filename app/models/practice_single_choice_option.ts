import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import PracticeSingleChoiceQuestion from '#models/practice_single_choice_question'
import PracticeSingleChoiceUserAnswer from '#models/practice_single_choice_user_answer'

export default class PracticeSingleChoiceOption extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare questionId: number

  @column()
  declare description: string

  @column()
  declare isCorrect: boolean

  @belongsTo(() => PracticeSingleChoiceQuestion)
  declare question: BelongsTo<typeof PracticeSingleChoiceQuestion>

  @hasMany(() => PracticeSingleChoiceUserAnswer)
  declare userAnswers: HasMany<typeof PracticeSingleChoiceUserAnswer>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}