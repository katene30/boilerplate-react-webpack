import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="row">
                <h1>
                    Neighbourhood Eats
                </h1>
            </div>
            <div className="row">
                <h3><em>
                    "Food to dine for!"
                    </em>
                </h3>
            </div>
            {/* Should change to <Links> */}
            <div className="row">
                <div className="col"><Link to='/'><button type="button" className="btn btn-secondary">Home</button></Link></div>
                <div className="col"><Link to='/ratings'><button type="button" className="btn btn-secondary">Ratings</button></Link></div>
                <div className="col"><Link to='/categories'><button type="button" className="btn btn-secondary">Categories</button></Link></div>
                
            </div>
        </div>
    )
}

export default Header