
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {id: 1, name: 'Leroy Burger', shopName: "Leroy's", rate: 4, image: 'food1.png', description: 'Standard beef burger with cheese.', price: 15},
        {id: 2, name: 'Chicken Katsu Donburi', shopName: 'One Sushi', rate: 5, image: 'food2.jpg', description: 'Standard katsu chicken donburi with noodles.', price: 9},
        {id: 3, name: 'Big Papa Burger', shopName: 'Mama Brown', rate: 1, image: 'food3.png', description: 'Fried chicken, bacon, beefy beef patty, cheese, lettuce, tomato, aioli.', price: 19.50}
      ]);
    });
};
