import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'practice_single_choice_user_answers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('RESTRICT')
      table.integer('question_id').unsigned().notNullable().references('id').inTable('practice_single_choice_questions').onDelete('RESTRICT')
      table.integer('selected_option_id').unsigned().notNullable().references('id').inTable('practice_single_choice_options').onDelete('RESTRICT')
      table.boolean('is_correct').notNullable()
      table.string('created_by').nullable()
      table.string('updated_by').nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}