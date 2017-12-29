import React from 'react'
import { Col } from 'react-bootstrap'

export default (props) => {
  const confirmedThisMonth = function () {
    const sum = props.props.circle4.history.reduce((a, b) => a + b, 0)
    return sum
  }

  const addCommas = function (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Col xs={12} md={12} className='tile'>
      <div className='tileBody wideBoyTile'>
        <div className='wideCircleWrap'>
          <ul>
            <li><Col xs={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(props.props.circle1.value)}</h3></div><div className='infoWideBoy'><h5>{props.props.circle1.title}</h5></div></Col></li>
            <li><Col xs={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(props.props.circle2.value)}</h3></div><div className='infoWideBoy'><h5>{props.props.circle2.title}</h5></div></Col></li>
            <li><Col xs={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(props.props.circle3.value)}</h3></div><div className='infoWideBoy'><h5>{props.props.circle3.title}</h5></div></Col></li>
            <li><Col xs={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(confirmedThisMonth())}</h3></div><div className='infoWideBoy'><h5>{props.props.circle4.title}</h5></div></Col></li>
          </ul>
        </div>
        <div className='imageWideBoy'><h5>{props.props.title}</h5></div>
      </div>
    </Col>
  )
}
