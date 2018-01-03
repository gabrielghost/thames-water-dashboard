import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import * as actions from '../../actions'
import Action from '../microComponents/action'
import Unread from '../microComponents/unread'

class ActionListTile extends Component {
  handleClick (value) {
    this.props.leaderboardTimeScale(value)
  }

  render () {
    console.log(this.props)
    let notifArray = this.props.data.dashReducer.notifications.data
    let unreadCount = 0
    notifArray.map(function (object, i) {
      if (object.unread === true) {
        unreadCount++
      }
    })
    let displayArray = notifArray.slice(0, 3)
    return (<Col xs={12} md={12} className='tile'>
      <div className='tileBody'>
        <div className={`titleBar ${this.props.data.dashReducer.notifications.title}`}>
          <div className={`title`}>
            <h3>{this.props.data.dashReducer.notifications.title}</h3>
            <Unread number={unreadCount} />
            <button>VIEW ALL</button>
          </div>
        </div>
        <div className='bodyBar'>
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

export default connect(mapStateToProps, actions)(ActionListTile)
