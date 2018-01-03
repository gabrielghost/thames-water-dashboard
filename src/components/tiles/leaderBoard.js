import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import * as actions from '../../actions'
import Indicator from '../microComponents/indicator'

class Leaderboard extends Component {
  handleClick (value) {
    this.props.leaderboardTimeScale(value)
  }

  selected (type) {
    if (type === this.props.data.dashReducer.leaderBoard) {
      return 'tabSelect'
    } else {
      return 'tabDeSelect'
    }
  }

  render () {
    let array = this.props.data.dashReducer.teamScores.data
    let timeframe = this.props.data.dashReducer.leaderBoard
    let sortedArray
    let score
    if (timeframe === 'week') {
      sortedArray = array.sort((a, b) => { return a.thisWeek - b.thisWeek })
    }
    if (timeframe === 'month') {
      sortedArray = array.sort((a, b) => { return a.thisMonth - b.thisMonth })
    }
    return (
      <div>
        <Col xs={12} md={12} className='tile'>
          <div className='tileBody'>
            <div className={`${this.props.data.dashReducer.teamScores.title}`}><h3>{this.props.data.dashReducer.teamScores.title}</h3>
            <div className='leaderBoardTab'>
              <div className={`${this.selected('week')} weekTab`}><button onClick={this.handleClick.bind(this, 'week')}>Weekly</button></div>
              <div className={`${this.selected('month')} monthTab`}><button onClick={this.handleClick.bind(this, 'month')}>Monthly</button></div>
            </div>
          </div>
            <div className='leaderboardBar'>
                {sortedArray.map(function (object, i) {
                                    let positionMovement
                  if (timeframe === 'week') {
                    score = object.history[0]
                    if (object.thisWeek > object.lastWeek) {
                      positionMovement = -1
                    }
                    if (object.thisWeek < object.lastWeek) {
                      positionMovement = 1
                    }
                    if (object.thisWeek === object.lastWeek) {
                      positionMovement = 0
                    }
                  }
                  if (timeframe === 'month') {
                    score = object.history.reduce((a, b) => { return a + b }, 0)
                    if (object.thisMonth > object.lastMonth) {
                      positionMovement = -1
                    }
                    if (object.thisMonth < object.lastMonth) {
                      positionMovement = 1
                    }
                    if (object.thisMonth === object.lastMonth) {
                      positionMovement = 0
                    }
                  }

                  return (
                    <ul>
                      <li className={'leaderboardPosition'}><p>{i + 1}.</p></li>
                      <li><div className={'actionIcon'}><img src={object.logo} /></div></li>
                      <li className={'teamName'}><p>{object.teamName}</p></li>
                      <li className={'leaderboardIndicator'}><p><Indicator number={positionMovement} size={'regular'} /></p></li>
                      <li className={'leaderboardScore'}><p>{score}</p></li>
                    </ul>
                  )
                })}
            </div>
          </div>
        </Col>
      </div>)
    }
  }

  function mapStateToProps (state) {
    return {
      data: state
    }
  }

  export default connect(mapStateToProps, actions)(Leaderboard)
