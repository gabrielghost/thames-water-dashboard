import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import * as actions from '../../actions'
import Indicator from '../microComponents/indicator'

class Leaderboard extends Component {
  handleClick (value) {
    this.props.leaderboardTimeScale(value)
  }

  positionMovement (thisWeek, lastWeek) {
    if (thisWeek > lastWeek) {
      return 1
    }
    if (thisWeek < lastWeek) {
      return -1
    }
    if (thisWeek === lastWeek) {
      return 0
    }
  }

  selected (type) {
    if (type === this.props.data.dashReducer.teamScores.view) {
      return 'btnSelect'
    } else {
      return 'btnDeSelect'
    }
  }

  render () {
    let array = this.props.data.dashReducer.teamScores.data
    let sortedArray = array.sort((a, b) => { return a.thisWeek - b.thisWeek })
    return (
      <div>
        <Col xs={12} md={12} className='tile'>
          <div className='tileBody'>
            <div className={`titleBar ${this.props.data.dashReducer.teamScores.title}`}><p>{this.props.data.dashReducer.teamScores.title}</p></div>
            <button className={this.selected(0)} onClick={this.handleClick.bind(this, 0)}>Week</button>
            <button className={this.selected(1)} onClick={this.handleClick.bind(this, 1)}>Month</button>
            <div className='leaderBoardBar'>
              <ul>
                {sortedArray.map(function (object, i) {
                  return (<li>
                    <tr>
                      <td>{i + 1}</td>
                      <td><div className={'actionIcon'}><img src={object.logo} /></div></td>
                      <td>{object.teamName}</td>
                      <td><Indicator number={-1} size={'regular'} /></td>
                      <td><p>{object.history[0]}</p></td>
                    </tr>
                  </li>)
                })}
              </ul>
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
