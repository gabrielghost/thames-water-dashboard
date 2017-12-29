import React from 'react'
import { Col } from 'react-bootstrap'
import Indicator from '../microComponents/indicator'

export default (props) => {
  const data = props.data
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
            <li><Col xs={3} s={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(data.circle1.value)}</h3></div><div className='infoWideBoy'><p>{data.circle1.title}</p></div></Col></li>
            <li><Col xs={3} s={3} md={3} className='wideCircleWrapChildren'><div className='wideCircle'><h3>{addCommas(data.circle2.value)}</h3></div><div className='infoWideBoy'><p>{data.circle2.title}</p></div></Col></li>
            <li><Col xs={3} s={3} md={3} className='wideCircleWrapChildren'><div className='wideCircleWithIndicator'><Indicator number={1} size={'large'} /><h3>{addCommas(arraySum(data.circle3.history))}</h3></div><div className='infoWideBoy'><p>{data.circle3.title}</p></div></Col></li>
            <li><Col xs={3} s={3} md={3} className='wideCircleWrapChildren'><div className='wideCircleWithIndicator'><Indicator number={-1} size={'large'} /><h3>{addCommas(arraySum(data.circle4.history))}</h3></div><div className='infoWideBoy'><p>{data.circle4.title}</p></div></Col></li>
          </ul>
        </div>
        <div className='imageWideBoy'><p>{data.title}</p></div>
      </div>
    </Col>
  )
}
