import React from 'react'
import {getWeather} from '../api/weather'

class Ratings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: undefined
        }

    }

    componentDidMount(){
        return getWeather().then(weather=>{
            this.setState({weather:weather})
        })
    }  

    render() {
        var thisWeather = this.state.weather
        return(
            <div className="container align-self-center food-view">
                {this.state.weather && 
                    <div>
                    <h2>{thisWeather.name} is looking {thisWeather.weather[0].main}</h2>
                    <p><em>{thisWeather.weather[0].description}</em></p>
                    <p>With a temperature of {thisWeather.main.temp}°C</p>
                    </div>
                }
            </div>
        )
    }
}

export default Ratings