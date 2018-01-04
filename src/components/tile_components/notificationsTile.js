import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import * as actions from '../../actions'
import Action from '../micro_components/action'
import Unread from '../micro_components/unread'

class NotificationsTile extends Component {
  handleClick () {
    this.props.toggleNotifications()
  }

  render () {
    let notifArray = this.props.data.dashReducer.notifications.data
    let unreadCount = 0
    let displayArray
    let expanded
    let buttonText
    notifArray.map(function (object, i) {
      if (object.unread === true) {
        unreadCount++
      }
    })
    if (this.props.data.dashReducer.viewAllNotifications === false) {
      displayArray = notifArray.slice(0, 3)
            expanded = ''
            buttonText = 'VIEW ALL'
    } else if (this.props.data.dashReducer.viewAllNotifications === true) {
      displayArray = notifArray
            expanded = 'expanded'
            buttonText = '✖'
    }

    return (<Col xs={12} md={12} className='tile'>
      <div className='tileBody'>
        <div className={`titleBar ${this.props.data.dashReducer.notifications.title}`}>
          <div className={`title`}>
            <h3>{this.props.data.dashReducer.notifications.title}</h3>
            <Unread number={unreadCount} />
            <button onClick={this.handleClick.bind(this)}>{buttonText}</button>
          </div>
        </div>
        <div className={`bodyBar ${expanded}`}>
          <ul>
            {displayArray.map(function (object, i) {
              return (<li><Action obj={object} key={i} /></li>)
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

export default connect(mapStateToProps, actions)(NotificationsTile)
