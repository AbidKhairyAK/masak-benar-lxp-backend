import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'practices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('topic_id').unsigned().notNullable().references('id').inTable('topics').onDelete('RESTRICT')
      table.enum('type', ['single_choice', 'code_challenge', 'open_question']).notNullable()
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