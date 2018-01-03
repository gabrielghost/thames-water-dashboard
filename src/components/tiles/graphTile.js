import React from 'react'
import { Col } from 'react-bootstrap'
import Chart from '../microComponents/dataQualityChart'
import Indicator from '../microComponents/indicator'
import CircularProgressbar from 'react-circular-progressbar'

export default (props) => {
  let progress = props.data.today - props.data.history[props.data.history.length-2].user
  return (
    <div>
      <Col xs={12} md={6} className='tile'>
        <div className={`tileBody ${props.data.title}`}>
          <div className='chartOverlayText'><h3>{props.data.title}</h3></div>
          <div className='chart'>
            <Chart data={props.data.history} />
          </div>
          <div className='chartInfo'>
            <div className='chartInfoLeft'>
            <CircularProgressbar percentage={props.data.today} initialAnimation={true} textForPercentage={(pct) => `${props.data.today}`} />
            <p className='outOf100'>OUT OF 100</p>
          </div>
          <div className='chartInfoCentre'></div>
            <div className='chartInfoRight'>
              <ul>
                <li><p>Score</p></li>
                <li><p>Target</p></li>
                <li><Indicator number={progress} size={'large'} /></li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </div>
  )
}
