import request from 'superagent'

export function getWeather() {
  return request 
  .get('http://api.openweathermap.org/data/2.5/weather?q=Beijing&units=metric&APPID=d155cba6c84906d694fb691055690d97').then(res => {

    return res.body
  })
}