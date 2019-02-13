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

router.get('/rating/:foodId/:rating', (req, res) => {
    var rating = req.params.rating
    var foodId = req.params.foodId

    db.addRating(rating, foodId)
    .then(rate =>{
        return res.json(rate)
    })
})

router.get('/averageRating/:foodId', (req,res) => {
    var
})

module.exports = router