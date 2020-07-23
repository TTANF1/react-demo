import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Route path="/home" component={Home}></Route>
    </Router>
  )
}

export default App
