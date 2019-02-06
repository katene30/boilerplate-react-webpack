import React from 'react'

const Home = ()=> {
    return (
        <div className="row justify-content-center">
            <ul className="list-unstyled">
                <li>
                    <h3>Leroy Burger</h3>
                    <img src="images/food1.png" alt="food"/>
                    <p>Standard beef burger with cheese.</p>
                    <p><strong>Rate: </strong>4</p>
                </li>
                <li>
                    <h3>Chicken Katsu Donburi</h3>
                    <img src="images/food2.jpg" alt="food"/>
                    <p>Standard katsu chicken donburi with noodles.</p>
                    <p><strong>Rate: </strong>5</p>
                </li>
                <li>
                    <h3>Big Papa Burger</h3>
                    <img src="images/food3.png" alt="food"/>
                    <p>Fried chicken, bacon, beefy beef patty, cheese, lettuce, tomato, aioli.</p>
                    <p><strong>Rate: </strong>2</p>
                </li>
            </ul>
        </div>
    )
}

export default Home