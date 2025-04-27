import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'course_enrollments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('RESTRICT')
      table.integer('course_id').unsigned().notNullable().references('id').inTable('courses').onDelete('RESTRICT')
      table.boolean('is_completed').notNullable().defaultTo(false)
      table.integer('completion_percentage').notNullable().defaultTo(0)
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