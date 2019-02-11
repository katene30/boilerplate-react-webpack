const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

router.get('/', (req,res)=> {
    db.getFood()
    .then(food => {
        return res.json(food)
    })
})

router.get('/food/:id', (req,res) => {
    var id = req.params.id
    db.getSingleFood(id)
    .then(food => {
        return res.json(food)
    })
})

router.get('/categories/:category', (req,res) => {
    var category = req.params.category
    db.getFoodCat(category)
    .then(food =>{
        return res.json(food)
    })
})

module.exports = router