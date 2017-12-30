import React from 'react'
import { Col } from 'react-bootstrap'
import Chart from '../microComponents/dataQualityChart'

export default (props) =>
<div>
  <Col xs={12} md={6} className='tile'>
    <div className={`tileBody ${props.data.title}`}>
      <div className='chartOverlayText'><p>{props.data.title}</p></div>
      <div className='chart'>
        <Chart data={props.data.history} />
      </div>
      <div className='chartInfo'>
      </div>
    </div>
  </Col>
</div>
