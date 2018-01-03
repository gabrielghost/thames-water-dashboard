import React from 'react'
import { Col } from 'react-bootstrap'
import NewsFeedAction from '../micro_components/NewsFeedAction'

export default (props) => {
  let array = props.data.data
  return (
    <Col xs={12} md={12} className='longTile'>
      <div className='longTileBody'>
          <div className={`titleBarLong ${props.data.title}`}><h3>{props.data.title}</h3></div>
          <div className='bodyBarLong'>
            <ul>
              {array.map(function (object, i) {
                return (<li><span><NewsFeedAction obj={object} key={i} /></span></li>)
              })}
            </ul>
          </div>
      </div>
    </Col>
  )
}
