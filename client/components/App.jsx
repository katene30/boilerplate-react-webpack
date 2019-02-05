import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'


import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Router>
        <div>
          <Route exact path = '/' component={Home} />
        </div>
      </Router>
    </div>
  )
}

export default App

