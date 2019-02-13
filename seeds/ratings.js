
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('ratings').insert([
        {id: 1, foodId: 1, rate: 4},
        {id: 2, foodId: 2, rate: 5},
        {id: 3, foodId: 3, rate: 1}
      ]);
    });
};
