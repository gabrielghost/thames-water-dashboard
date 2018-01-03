import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import * as actions from '../../actions'
import Action from '../micro_components/action'
import Unread from '../micro_components/unread'

class BadgesTile extends Component {
  handleClick (value) {
    this.props.toggleBadges()
  }

  render () {
    let notifArray = this.props.data.dashReducer.badges.data
    let unreadCount = 0
    let displayArray
    let expanded
    let buttonText
    if (this.props.data.dashReducer.viewAllBadges === false) {
      displayArray = notifArray.slice(0, 3)
      expanded = ''
      buttonText = 'VIEW ALL'
    } else if (this.props.data.dashReducer.viewAllBadges === true) {
      displayArray = notifArray
      expanded = 'expanded'
      buttonText = '✖'
    }
    notifArray.map(function (object, i) {
      if (object.unread === true) {
        unreadCount++
      }
    })
    return (<Col xs={12} md={12} className='tile'>
      <div className='tileBody'>
        <div className={`titleBar ${this.props.data.dashReducer.badges.title}`}>
          <div className={`title`}>
            <h3>{this.props.data.dashReducer.badges.title}</h3>
            <Unread number={unreadCount} />
            <button onClick={this.handleClick.bind(this)}>{buttonText}</button>
          </div>
        </div>
        <div className={`bodyBar ${expanded}`}>
          <ul>
            {displayArray.map(function (object, i) {
              return (<li key={i}><Action obj={object} /></li>)
            })}
          </ul>
        </div>
      </div>
    </Col>)
  }
}
function mapStateToProps (state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(BadgesTile)
