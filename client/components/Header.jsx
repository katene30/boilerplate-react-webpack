import React from 'react'

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
                <div className="col"><a href="#"><button type="button" class="btn btn-secondary">Home</button></a></div>
                <div className="col"><a href="#"><button type="button" class="btn btn-secondary">Ratings</button></a></div>
                <div className="col"><a href="#"><button type="button" class="btn btn-secondary">Categories</button></a></div>
            </div>
        </div>
    )
}

export default Header