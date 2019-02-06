import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'


import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <div>
          <Header />
          <Route exact path = '/' component={Home} />
          </div>
      </Router>
    </div>
  )
}

export default App

