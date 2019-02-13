import React from 'react'
import {addRating} from '../api/food'
import {averageRating} from '../api/food'
import {changeRating} from '../api/food'

class RatingForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            rate: null,
            changeRate: true,
            newRate: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.addRating = this.addRating.bind(this)
        this.averageRating = this.averageRating.bind(this)
        this.changeRating = this.changeRating.bind(this)
    }

    handleChange(event){
        this.setState({rate:event.target.value})
    }

    changeRating(newRate){
        var foodId = this.props.food.id
        changeRating(foodId,newRate)
        .then(
            this.props.sendStates(this.state.newRate)
        )
    }

    averageRating(){
        var foodId = this.props.food.id
        averageRating(foodId)
        .then(newRate => {
            this.setState({newRate:newRate})
            this.changeRating(newRate)
        }
        )
    }
    addRating(){
        var rating = this.state.rate
        var foodId = this.props.food.id
        addRating(rating, foodId)
        .then(
            this.setState({changeRate: false}),
            this.averageRating()
        )
    }

    render(){
        return(
        <React.Fragment>
            {this.state.changeRate && 
                        <form onSubmit={e => e.preventDefault()}>
                        <input type="radio" name="rate" value="1" onChange={this.handleChange}/> 1
                        <input type="radio" name="rate" value="2" onChange={this.handleChange}/> 2
                        <input type="radio" name="rate" value="3" onChange={this.handleChange}/> 3
                        <input type="radio" name="rate" value="4" onChange={this.handleChange}/> 4
                        <input type="radio" name="rate" value="5" onChange={this.handleChange}/> 5
                        <button type="button"onClick={this.addRating}>Submit</button>
                    </form>
            }
        </React.Fragment>
        )
    }
}
export default RatingForm