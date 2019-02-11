import React from 'react'
import { Link } from 'react-router-dom'

import {getFoodCat} from '../api/food'

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: null,
            food: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.getFoodCat = this.getFoodCat.bind(this)
    }

    handleChange(event){
        this.setState({ category: event.target.value })
      }

    getFoodCat(){
        var category = this.state.category
        getFoodCat(category)
        .then((food) => {
            this.setState({food: food})
        })
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.category !== prevState.category){
            this.getFoodCat()
        }
    }
    

    render() {
        return(
            <div>
                <h2>What type of food are you after?</h2>
                    <div>
                        <form>
                            <select name="food-category" onChange={this.handleChange}>
                                <option disabled selected value> -- select an option -- </option>
                                <option value="chicken">Chicken</option>
                                <option value="fish">Fish</option>
                                <option value="beef">Beef</option>
                                <option value="vege">Veges</option>
                            </select>
                        </form>
                    </div>
                {this.state.category && (
                    <div>
                        <h3>{this.state.category}!</h3>
                        <div>
                            <ul className="list-unstyled">
                                {this.state.food.map((food,i) => (<Link className="link" to={`/food/${food.id}`} key={i} style={{ textDecoration: 'none' }}>
                                <li>
                                    <h5>{food.name}</h5>
                                    <img src={`images/${food.image}`} alt={food.name}/>
                                    <p>{food.description}</p>
                                    <p><strong>Rate: </strong>{food.rate}</p>
                                </li>
                            </Link>
                            ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            )
    }
}

export default Categories