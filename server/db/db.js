const knex = require('knex')
const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
    getFood,
    getSingleFood,
    getFoodCat,
    addRating
}

function getFood () {
    return db('food').select()
  }

function getSingleFood(id) {
    return db('food').where('id',id).select()
}

function getFoodCat(category) {
    return db('food').where('category', category).select()
}

function addRating(rating, foodId) {
    var newRating = {
        foodId:foodId,
        rate:rating
    };
    return db('ratings')
    .insert(newRating)
}