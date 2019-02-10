import React from 'react'
import { Link } from 'react-router-dom'
import {getSingleFood} from '../api/food'

class Food extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleFood: null
        }
        this.getSingleFood = this.getSingleFood.bind(this)
    }

    componentDidMount(){
        this.getSingleFood()
    }

    getSingleFood(){
        var id = this.props.match.params.id
        getSingleFood(id)
        .then(food => {
            this.setState({singleFood:food})
        })
    }

    render() {
        return(
            <div>Sup eh</div>
        )
    }
}

export default Food