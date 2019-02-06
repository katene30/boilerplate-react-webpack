const knex = require('knex')
const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
    getFood
}

function getFood () {
    return db('food').select()
  }