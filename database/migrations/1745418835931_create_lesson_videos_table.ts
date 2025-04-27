import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lesson_videos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('lesson_id').unsigned().notNullable().references('id').inTable('lessons').onDelete('RESTRICT')
      table.string('video_url').notNullable()
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