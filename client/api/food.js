import request from 'superagent'

export function getFood(){
    return request.get('/api')
    .then(res => {
        return res.body
    })
}
