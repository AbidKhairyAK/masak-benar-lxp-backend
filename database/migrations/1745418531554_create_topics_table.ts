import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'topics'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('chapter_id').unsigned().notNullable().references('id').inTable('chapters').onDelete('RESTRICT')
      table.string('title').notNullable()
      table.integer('sort_order').notNullable()
      table.enum('type', ['lesson', 'practice']).notNullable()
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