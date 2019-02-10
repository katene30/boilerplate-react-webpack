const knex = require('knex')
const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
    getFood,
    getSingleFood
}

function getFood () {
    return db('food').select()
  }

function getSingleFood(id) {
    return db('food').where('id',id).select()
}