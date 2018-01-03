import React from 'react'
import { Col } from 'react-bootstrap'

export default (props) => {
  return (
    <Col xs={12} md={12} className='longTile'>
      <div className='longTileBody'>
          <div className={`titleBarLong ${props.data.title}`}><h3>{props.data.title}</h3></div>
          <div className='bodyBarLong'>
            <ul>
    <li><span>Item1</span></li>
    <li><span>Item1</span></li>
    <li><span>Item1</span></li>
    <li className={'bump'}><span>Item1</span></li>
    <li><span>Item1</span></li>
    <li><span>Item1</span></li>
    <li><span>Item1</span></li>
</ul>
          </div>
      </div>
    </Col>
  )
}
