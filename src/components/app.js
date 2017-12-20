import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './dashboard'

class App extends Component {
  render () {
    return (
      <div>
          <Dashboard />
      </div>
    )
  }
}

export { App as default }
