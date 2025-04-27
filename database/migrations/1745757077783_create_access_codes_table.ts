import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'access_codes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('course_id').unsigned().references('courses.id').onDelete('RESTRICT')
      table.string('title')
      table.string('code')
      table.integer('quota_used')
      table.integer('quota_total')
      table.date('expiry_date')
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