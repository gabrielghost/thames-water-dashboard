import React from 'react'
import { Col } from 'react-bootstrap'

export default () =>

<Col xs={12} md={6} className='tile'>
  <div className='tileBody'>
    <div className='circleWrap'><div className='circle'><h3>4.3</h3></div></div>
    <div className='graph'><h5>Data Quality</h5></div>
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
