import React from 'react'
import { Col } from 'react-bootstrap'

export default (props) => {
  const arraySum = function (array) {
    const sum = array.reduce((a, b) => a + b, 0)
    return sum
  }

  const addCommas = function (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Col xs={12} md={12} className='stretchTile'>
      <div className='tileBody wideBoyTile'>
        <div className='wideCircleWrap'>
          <ul>
            <li><Col xs={3} s={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(props.props.circle1.value)}</h3></div><div className='infoWideBoy'><p>{props.props.circle1.title}</p></div></Col></li>
            <li><Col xs={3} s={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(props.props.circle2.value)}</h3></div><div className='infoWideBoy'><p>{props.props.circle2.title}</p></div></Col></li>
            <li><Col xs={3} s={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(arraySum(props.props.circle3.history))}</h3></div><div className='infoWideBoy'><p>{props.props.circle3.title}</p></div></Col></li>
            <li><Col xs={3} s={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(arraySum(props.props.circle4.history))}</h3></div><div className='infoWideBoy'><p>{props.props.circle4.title}</p></div></Col></li>
          </ul>
        </div>
        <div className='imageWideBoy'><p>{props.props.title}</p></div>
      </div>
    </Col>
  )
}
