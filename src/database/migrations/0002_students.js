exports.up = function (knex) {
  console.log('Migration: STUDENTS')

  return knex.schema.createTable('students', function (table) {
    table.increments('id').primary()

    table.string('name', 100).notNullable()
    table.string('code', 30).unique().notNullable()
    table
      .enu('status', ['ACTIVE', 'INACTIVE'])
      .notNullable()
      .defaultTo('ACTIVE')

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('students')
}
