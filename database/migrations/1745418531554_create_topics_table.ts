import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'topics'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('chapter_id').unsigned().notNullable().references('id').inTable('chapters').onDelete('CASCADE')
      table.string('title').notNullable()
      table.integer('sort_order').notNullable()
      table.enum('type', ['lesson', 'practice']).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}