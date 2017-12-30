import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { LineChart, Line, XAxis, ReferenceLine, Legend } from 'recharts'

export default (props) => {


  const graphData = function (type) {
    if (type === 0) {
      return this.props.data.dashReducer.myTeamScores.history
    } else if (type === 1) {
      return this.props.data.dashReducer.myTeamScores.history1
    } else if (type === 2) {
      return this.props.data.dashReducer.myTeamScores.history2
    }
  }

  const selected = function (type) {
    if (type === this.props.data.dashReducer.state.mainGraph) {
      return 'btnSelect'
    } else {
      return 'btnDeSelect'
    }
  }

  const graphGen = function (data) {
    return (
      <LineChart
        width={220}
        height={100}
        data={data}
        margin={{ top: 10, right: 2, left: 20, bottom: 2 }}

        >
          <XAxis dataKey='name' padding={{right: 5, left: 10}} stroke={'#bfbaba'} />
          {/* <Legend /> */}
          <Line type='monotone' dataKey='team' stroke='#C22E72' strokeWidth={3} yAxisId={0} dot={null} />
          <Line type='monotone' dataKey='user' stroke='#C22E72' strokeWidth={3} yAxisId={1} dot={null} />
          <ReferenceLine y={220} label='' stroke='white' strokeDasharray='5 5' />
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
          {graphGen(props.data)}
        </div>
      </div>
    )

  }
