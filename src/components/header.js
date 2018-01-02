import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import OverallTeamChart from './microComponents/overallTeamChart'
import TotalScore from './microComponents/totalScore'
import { Col } from 'react-bootstrap'

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
          <Col xs={12} s={6} md={1} className='headerComponent' >
            <img className='headerLogo' src='./assets/images/thames-water-logo.png' alt='Thames Water Logo' />
          </Col>
                <Col xs={12} s={6} md={3} className='headerComponent' >
                  <div className='greeting'>
                    <h3>{this.teamName()}</h3>
                    <h5>Welcome back {this.userName()}</h5>
                  </div>
                </Col>
                <Col xs={12} s={6} md={5} className='headerComponent' >
                  <OverallTeamChart />
                </Col>
                <Col xs={12} s={6} md={3} className='headerComponent' >
                  <TotalScore />
                </Col>
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


    {/* <div>
      <nav className='navbar navbar-light'>
      <div className='header'>
      <img className='headerLogo headerComponent' src='./assets/images/thames-water-logo.png' alt='Thames Water Logo' />
      <Col xs={12} md={3} className='column headerComponent' >
      <div className='greeting'>
      <h3>{this.teamName()}</h3>
      <h5>Welcome back {this.userName()}</h5>
    </div>
  </Col>
  <Col xs={12} md={3} className='column headerComponent' >
  <OverallTeamChart />
</Col>
<Col xs={12} md={3} className='column headerComponent' >
<TotalScore />
</Col>
</div>
</nav>
</div> */}
