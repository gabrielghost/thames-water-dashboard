import React from 'react'
import { Col } from 'react-bootstrap'
import Action from '../microComponents/action'

export default (props) => {
  let notifArray = props.data.data
  return (<Col xs={12} md={12} className='tile'>
    <div className='tileBody'>
      <div className={`titleBar ${props.data.title}`}><h3>{props.data.title}</h3></div>
      <div className='bodyBar'>
        <ul>
          {notifArray.map(function (object, i) {
            return (<li><Action obj={object} key={i} /></li>)
          })}
        </ul>
      </div>
    </div>
  </Col>)
}
