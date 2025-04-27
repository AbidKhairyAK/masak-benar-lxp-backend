import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import PracticeSingleChoiceOption from '#models/practice_single_choice_option'
import PracticeSingleChoiceUserAnswer from '#models/practice_single_choice_user_answer'
import Practice from '#models/practice'

export default class PracticeSingleChoiceQuestion extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare practiceId: number

  @column()
  declare question: string

  @belongsTo(() => Practice)
  declare practice: BelongsTo<typeof Practice>

  @hasMany(() => PracticeSingleChoiceOption, {
    foreignKey: 'questionId'
  })
  declare options: HasMany<typeof PracticeSingleChoiceOption>

  @hasMany(() => PracticeSingleChoiceUserAnswer, {
    foreignKey: 'questionId'
  })
  declare userAnswers: HasMany<typeof PracticeSingleChoiceUserAnswer>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}