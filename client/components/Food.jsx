import React from 'react'
import {getSingleFood} from '../api/food'
import RatingForm from './RatingForm'

class Food extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleFood: []
        }
        this.getSingleFood = this.getSingleFood.bind(this)
        this.getStates = this.getStates.bind(this)
    }

    componentDidMount(){
        this.getSingleFood()
    }

    getSingleFood(){
        var id = this.props.match.params.id
        getSingleFood(id)
        .then(food => {
            this.setState({singleFood:food[0]})
        })
    }

    getStates(){
        this.getSingleFood()
    }

    render() {
        var food = this.state.singleFood
        return(
            <div className="container align-self-center food-view">
                <div className="row">
                    <div className="col-6"><img src={`images/${food.image}`} alt={food.name}/></div>
                    <RatingForm food={this.state.singleFood} sendStates={this.getStates}/>
                    <div className="col-6">
                        <div>
                            <h3>{food.name} from {food.shopName}</h3>
                        </div>
                        <div>
                            <p>{food.description}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Current Rating: {food.rate}</h3>
                    </div>
                    <div className="col-6">
                        <h3>${food.price}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Food