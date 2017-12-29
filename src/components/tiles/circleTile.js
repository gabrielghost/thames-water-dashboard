import React from 'react'
import { Col } from 'react-bootstrap'
import Percentage from '../microComponents/percentage'

export default (props) => {

  return (<Col xs={12} md={6} className='tile'>
    <div className='tileBody'>
      <div className='circleWrap'><div className='circle'><h3>{props.data.today}</h3></div></div>
      <div className='image'><p>{props.data.title}</p></div>
      <div className='info'>
        <ul>
          <li><p>TARGET</p>
          <p className={'target'}>{props.data.target}</p></li>
          <li><p>THIS WEEK</p>
          <Percentage array={props.data.history} timescale={'week'}/></li>
          <li><p>THIS MONTH</p>
          <Percentage array={props.data.history} timescale={'month'}/></li>
        </ul>
      </div>
    </div>
  </Col>
)
}
