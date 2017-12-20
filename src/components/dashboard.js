import React, { Component } from 'react'
import { connect } from 'react-redux'
import Welcome from './welcome'
import Header from './header'
import * as actions from '../actions'

class Dashboard extends Component {
  componentDidMount () {
    // this.props.fetchData()
  }

  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(Dashboard)
