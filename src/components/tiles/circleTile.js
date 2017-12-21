import React from 'react'
import { Col } from 'react-bootstrap'

export default (props) => {
return (<Col xs={12} md={6} className='tile'>
  <div className='tileBody'>
    <div className='circleWrap'><div className='circle'><h3>{props.mainScore}</h3></div></div>
    <div className='image'><h5>Customer Satisfaction</h5></div>
    <div className='info'>
      <ul>
        <li><h5>TARGET</h5>
        <h5>4.5</h5></li>
        <li><h5>TARGET</h5>
        <h5>4.5</h5></li>
        <li><h5>TARGET</h5>
        <h5>4.5</h5></li>
      </ul>
    </div>
  </div>
</Col>
)
}
