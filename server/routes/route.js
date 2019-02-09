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


module.exports = router