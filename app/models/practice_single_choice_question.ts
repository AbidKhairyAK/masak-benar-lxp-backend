import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import PracticeSingleChoiceOption from '#models/practice_single_choice_option'
import PracticeSingleChoiceUserAnswer from '#models/practice_single_choice_user_answer'

export default class PracticeSingleChoiceQuestion extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare practiceId: number

  @column()
  declare question: string

  @column()
  declare imageUrl: string | null

  @hasMany(() => PracticeSingleChoiceOption)
  declare options: HasMany<typeof PracticeSingleChoiceOption>

  @hasMany(() => PracticeSingleChoiceUserAnswer)
  declare userAnswers: HasMany<typeof PracticeSingleChoiceUserAnswer>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}