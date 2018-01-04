import React from 'react'
import { LineChart, Line, XAxis, YAxis, ReferenceLine } from 'recharts'

export default (props) => {

  const chartData = function (type) {
    if (type === 0) {
      return this.props.data.dashReducer.myTeamScores.history
    } else if (type === 1) {
      return this.props.data.dashReducer.myTeamScores.history1
    } else if (type === 2) {
      return this.props.data.dashReducer.myTeamScores.history2
    }
  }

  const chartGen = function (data) {
    return (
      <LineChart
        width={220}
        height={100}
        data={data}
        margin={{ top: 10, right: 2, left: 20, bottom: 2 }}

        >

          <XAxis dataKey='name' padding={{right: 5, left: 10}} stroke={'#bfbaba'} />
          <Line type='monotone' dataKey='target' stroke='#C22E72' strokeWidth={3} yAxisId={0} dot={null} />
          <Line type='monotone' dataKey='user' stroke='#C22E72' strokeWidth={3} yAxisId={1} dot={null} />
          <ReferenceLine y={70} label='' stroke='white' strokeDasharray='5 5' />
        </LineChart>
      )
    }
    return (
      <div className='qualityChart'>
        <div className='qualityKey'>
          <p className='qualityChartTarget'>● Target</p>
          <p className='qualityChartActual'>● Actual</p>
        </div>
        <div className='qualityChartWrap'>
          {chartGen(props.data)}
        </div>
      </div>
    )
  }
