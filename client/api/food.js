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
