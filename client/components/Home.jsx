import React from 'react'

import {getFood} from '../api/food'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            food: []
        }
        this.getFood = this.getFood.bind(this)
    }


    componentDidMount(){
        this.getFood()
    }

    getFood(){
        getFood()
        .then(food => {
            this.setState({food:food})
        })
    }




    render(){
        return(
            <div className="row justify-content-center">
            <ul className="list-unstyled">
                {this.state.food.map((food,i) => (<li key={i}>
                    <h3>{food.name}</h3>
                    <img src={`images/${food.image}`} alt={food.name}/>
                    <p>{food.description}</p>
                    <p><strong>Rate: </strong>{food.rate}</p>
                </li>))}
            </ul>
        </div>
        )
    }
}
export default Home