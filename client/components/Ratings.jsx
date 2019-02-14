import React from 'react'
// import {getWeather} from '../api/weather'
import { Link } from 'react-router-dom'

import {getSortedFood} from '../api/food'

class Ratings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // weather: undefined,
            sortedFood: []
        }

    }

    componentDidMount(){
        // return getWeather().then(weather=>{
        //     this.setState({weather:weather})
        // })
        return getSortedFood()
        .then(sortedFood=>{
            this.setState({sortedFood: sortedFood})
            console.log(this.state.sortedFood)
        }
        )
    }  

    render() {
        var thisWeather = this.state.weather
        return(
            <div className="container align-self-center food-view">
                <h1>Top 5:</h1>
                {/* {this.state.weather && 
                    <div>
                    <h2>{thisWeather.name} is looking {thisWeather.weather[0].main}</h2>
                    <p><em>{thisWeather.weather[0].description}</em></p>
                    <p>With a temperature of {thisWeather.main.temp}°C</p>
                    </div>
                } */}
                <ul className="list-unstyled">
                {this.state.sortedFood.map((food,i) => (<Link className="link" to={`/food/${food.id}`} key={i} style={{ textDecoration: 'none' }}><li>
                    <h3>{i+1}. {food.name}</h3>
                    <img src={`images/${food.image}`} alt={food.name}/>
                    <p>{food.description}</p>
                    <p><strong>Rate: </strong>{food.rate}</p>
                </li>
                </Link>
                ))}
            </ul>
            </div>
        )
    }
}

export default Ratings