import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { LineChart, Line, XAxis, ReferenceLine } from 'recharts'

class OverallTeamGraph extends Component {

  handleClick (value, event) {
    this.props.graphType(value)
  }

  graphData (type) {
    if (type === 0) {
      return this.props.data.dashReducer.myTeamScores.history
    } else if (type === 1) {
      return this.props.data.dashReducer.myTeamScores.history1
    } else if (type === 2) {
      return this.props.data.dashReducer.myTeamScores.history2
    }
  }

  selected (type) {
    if (type === this.props.data.dashReducer.state.mainGraph) {
      return 'btnSelect'
    } else {
      return 'btnDeSelect'
    }
  }

  graphGen (graphType) {
    return (
  <LineChart
    width={325}
    height={135}
    data={this.graphData(graphType)}
    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey='name' />
      <Line type='monotone' dataKey='team' stroke='#C22E72' strokeWidth={3} yAxisId={0} dot={''} />
      <Line type='monotone' dataKey='user' stroke='#586C8D' strokeWidth={3} yAxisId={1} dot={''} />
      <ReferenceLine y={420} label='' stroke='white' strokeDasharray='5 5' />
    </LineChart>
  )
  }

  render () {
    return (
      <div className='teamChart'>
        <button className={this.selected(0)} onClick={this.handleClick.bind(this, 0)}>Week</button>
        <button className={this.selected(1)} onClick={this.handleClick.bind(this, 1)}>Month</button>
        <button className={this.selected(2)} onClick={this.handleClick.bind(this, 2)}>All Time</button>
        {this.graphGen(this.props.data.dashReducer.state.mainGraph)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(OverallTeamGraph)
