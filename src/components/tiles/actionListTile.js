import React from 'react'
import { Col } from 'react-bootstrap'
import Action from '../microComponents/action'
import Unread from '../microComponents/unread'

export default (props) => {
  let notifArray = props.data.data
  let unreadCount = 0
  notifArray.map(function(object, i) {
    if (object.unread === true){
      unreadCount++
    }
  })
  let displayArray = notifArray.slice(0, 3)
  return (<Col xs={12} md={12} className='tile'>
    <div className='tileBody'>
      <div className={`titleBar ${props.data.title}`}>
        <div className={`title`}>
          <h3>{props.data.title}</h3>
           <Unread number={unreadCount} />
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
