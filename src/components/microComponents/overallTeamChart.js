import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { LineChart, Line, XAxis, ReferenceLine, Legend } from 'recharts'

class OverallTeamChart extends Component {

  handleClick (value, event) {
    this.props.chartType(value)
  }

  chartData (type) {
    if (type === 0) {
      return this.props.data.dashReducer.myTeamScores.history
    } else if (type === 1) {
      return this.props.data.dashReducer.myTeamScores.history1
    } else if (type === 2) {
      return this.props.data.dashReducer.myTeamScores.history2
    }
  }

  selected (type) {
    if (type === this.props.data.dashReducer.state.mainChart) {
      return 'btnSelect'
    } else {
      return 'btnDeSelect'
    }
  }

  chartGen (chartType) {
    return (
  <LineChart
    width={325}
    height={135}
    data={this.chartData(chartType)}
    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}

    >
      <XAxis dataKey='name' padding={{right: 5, left: 10}} stroke={'#bfbaba'} />
      {/* <Legend /> */}
      <Line type='monotone' dataKey='team' stroke='#C22E72' strokeWidth={3} yAxisId={0} dot={null} />
      <Line type='monotone' dataKey='user' stroke='#586C8D' strokeWidth={3} yAxisId={1} dot={null} />
      <ReferenceLine y={220} label='' stroke='white' strokeDasharray='5 5' />
    </LineChart>
  )
  }

  render () {
    return (
      <div className='teamChart'>
        <button className={this.selected(0)} onClick={this.handleClick.bind(this, 0)}>Week</button>
        <button className={this.selected(1)} onClick={this.handleClick.bind(this, 1)}>Month</button>
        <button className={this.selected(2)} onClick={this.handleClick.bind(this, 2)}>All Time</button>
        <p className='teamChartTarget'><img src='./assets/images/target.png' />Target</p>
        <p className='teamChartMe'>● Me</p>
        <p className='teamChartMyTeam'>● My Team</p>

        {this.chartGen(this.props.data.dashReducer.state.mainChart)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(OverallTeamChart)
