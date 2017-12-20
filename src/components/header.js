import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import OverallTeamGraph from './overallTeamGraph'
import TotalScore from './totalScore'

class Header extends Component {
  userName () {
    if (this.props.data.dashReducer) {
      return this.props.data.dashReducer.userName
    } else {
      return 'Default Name'
    }
  }
  teamName () {
    if (this.props.data.dashReducer) {
      return this.props.data.dashReducer.teamName
    } else {
      return 'Default Name'
    }
  }

  render () {
    return (
      <div>
          <nav className='navbar navbar-light'>
            <ul>
              <img className='headerLogo' src='./assets/images/thames-water-logo.png' alt='Thames Water Logo' />
              <li>
                <div className='greeting'>
                <h3>{this.teamName()}</h3>
              <h5>Welcome back {this.userName()}</h5>
            </div>
            </li>
              <li><OverallTeamGraph /></li>
              <li><TotalScore /></li>
            </ul>

          </nav>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(Header)
