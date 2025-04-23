import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'practices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('topic_id').unsigned().notNullable().references('id').inTable('topics').onDelete('CASCADE')
      table.string('title').notNullable()
      table.enum('type', ['single_choice', 'code_challenge', 'open_question']).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}