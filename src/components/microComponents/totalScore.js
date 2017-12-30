import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import CircularProgressbar from 'react-circular-progressbar'

class TotalScore extends Component {

  totalScore () {
    if (this.props.data) {
      return this.props.data.dashReducer.myTeamScores.today
    } else {
      return 100
    }
  }

  render () {
    let score = this.totalScore()
    let percentage = score / 500 * 100
    return (

      <div className='totalScore'>
        <div className='totalScoreChart'>
        <CircularProgressbar percentage={percentage} initialAnimation={true} textForPercentage={(pct) => `${score}`} />
      </div>
        <h5>Overall Team Score</h5>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(TotalScore)
