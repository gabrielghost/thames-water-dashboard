import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './main_components/dashboard'

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
