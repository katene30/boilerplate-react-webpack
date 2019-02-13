
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ratings', (table) => {
      table.increments('id')
      table.integer('foodId')
      table.integer('rate')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ratings')
  };
  