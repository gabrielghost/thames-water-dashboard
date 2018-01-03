import React from 'react'
import { Col } from 'react-bootstrap'
import Chart from '../micro_components/dataQualityChart'
import Indicator from '../micro_components/indicator'
import CircularProgressbar from 'react-circular-progressbar'

export default (props) => {
  const data = props.data
  const progress = data.today - data.history[data.history.length-2].user
  const percentage = Math.round((data.history[data.history.length-2].user/data.today)*100)
  let polarity
  if (percentage > 0){
    polarity = 'UP'
  }
  if (percentage < 0){
    polarity = 'DOWN'
  }
  if (percentage === 0){
    polarity = ''
  }
  return (
    <div>
      <Col xs={12} md={6} className='tile'>
        <div className={`tileBody ${props.data.title}`}>
          <div className='chartOverlayText'><h3>{data.title}</h3></div>
          <div className='chart'>
            <Chart data={data.history} />
          </div>
          <div className='chartInfo'>
            <div className='chartInfoLeft'>
            <CircularProgressbar percentage={data.today} initialAnimation={true} textForPercentage={(pct) => `${props.data.today}`} />
            <p className='outOf100'>OUT OF 100</p>
          </div>
          <div className='chartInfoCentre'></div>
            <div className='chartInfoRight'>
              <ul>
                <li><p>Score - {data.today}</p></li>
                <li><Indicator number={progress} size={'large'} />{polarity}{percentage}%</li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </div>
  )
}
