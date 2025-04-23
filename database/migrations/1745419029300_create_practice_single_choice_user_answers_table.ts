import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'practice_single_choice_user_answers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE')
      table.integer('question_id').unsigned().notNullable().references('id').inTable('practice_single_choice_questions').onDelete('CASCADE')
      table.integer('selected_option_id').unsigned().notNullable().references('id').inTable('practice_single_choice_options').onDelete('CASCADE')
      table.boolean('is_correct').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}