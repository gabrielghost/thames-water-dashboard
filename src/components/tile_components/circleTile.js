import React from 'react'
import { Col } from 'react-bootstrap'
import Percentage from '../micro_components/percentage'
import Progress from '../micro_components/progress'

export default (props) => {
if (props.data.title !== 'Accuracy') {
  return (<Col xs={12} md={6} className='tile'>
    <div className={`tileBody ${props.data.title}`}>
      <div className='circleWrap'><div className='circle'><h3>{props.data.today}</h3></div></div>
      <div className='imageOverlayText'><h3>{props.data.title}</h3></div>
      <div className='imageOverlay'></div>
      <div className='image'></div>
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
} else {
  return (<Col xs={12} md={6} className='tile'>
    <div className={`tileBody ${props.data.title}`}>
      <div className='circleWrap'><div className='circle'><h3>{props.data.today}</h3></div></div>
      <div className='imageOverlayText'><h3>{props.data.title}</h3></div>
      <div className='imageOverlay'></div>
      <div className='image'></div>
      <div className='info'>
<p>THIS WEEK</p>
<Progress data={props.data.history} timeframe={'week'} />
<p>THIS MONTH</p>
<Progress data={props.data.history} timeframe={'month'} />
      </div>
    </div>
  </Col>)
}
}
