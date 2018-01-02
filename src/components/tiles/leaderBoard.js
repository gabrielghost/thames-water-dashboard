import React from 'react'
import { Col } from 'react-bootstrap'
import Action from '../microComponents/action'

export default (props) => {
  console.log(props)
  let notifArray = props.data.data

  return (<Col xs={12} md={12} className='tile'>
    <div className='tileBody'>
      <div className={`titleBar ${props.data.title}`}><p>{props.data.title}</p></div>
      <div className='bodyBar'>
        <ul>
          {notifArray.map(function (object, i) {
            return (<li>{object.teamName}{object.history[0]}</li>)
          })}
        </ul>
      </div>
    </div>
  </Col>)
}
