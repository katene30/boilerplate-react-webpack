
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food', (table) => {
      table.increments('id')
      table.string('name')
      table.string('shopName')
      table.integer('rate')
      table.string('image')
      table.string('description')
      table.integer('price')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food')
};
