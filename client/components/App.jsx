import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'


import Home from './Home'
import Header from './Header'
import Food from './Food'
import Categories from './Categories'
import Ratings from './Ratings'

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <div>
          <Header />
          <Route exact path = '/' component={Home} />
          <Route path = '/food/:id' component={Food} />
          <Route path = '/categories' component={Categories} />
          <Route path = '/ratings' component={Ratings} />
          </div>
      </Router>
    </div>
  )
}

export default App

