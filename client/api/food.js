import request from 'superagent'

export function getFood(){
    return request.get('/api')
    .then(res => {
        return res.body
    })
}

export function getSingleFood(id){
    return request.get(`/api/food/${id}`)
    .then(res => {
        return res.body
    })
}

export function getFoodCat(category){
    return request.get(`/api/categories/${category}`)
    .then(res => {
        return res.body
    })
}

export function addRating(rating, foodId){
    return request.get(`/api/rating/${foodId}/${rating}`)
    .then(res => {
        return res.body
    })
}

export function averageRating(foodId){
    return request.get(`/api/averageRating/${foodId}`)
    .then(res => {
        return res.body
    })
}

export function changeRating(foodId,newRate){
    return request.get(`/api/changeRating/${foodId}/${newRate}`)
    .then(res => {
        return res.body
    })
}