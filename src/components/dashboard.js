import React, { Component } from 'react'
import { connect } from 'react-redux'
import CircleTile from './tiles/circleTile'
import GraphTile from './tiles/graphTile'
import WideBoyTile from './tiles/wideboytile'
import LeaderBoard from './tiles/leaderboard'
import ActionListTile from './tiles/actionlisttile'
import NewsFeed from './tiles/newsfeed'
import Header from './header'
import * as actions from '../actions'
import { Col, Grid } from 'react-bootstrap'

class Dashboard extends Component {
  componentDidMount () {
    // this.props.fetchData()
  }

  render () {
    const db = this.props.data.dashReducer
    return (
      <div>
        <Header />
        <Grid>
          <Col xs={12} s={12} md={3} className='column' >
            <ActionListTile data={db.notifications} />
            <ActionListTile data={db.badges} />
            <LeaderBoard />
          </Col>
          <Col xs={12} s={12} md={3} lg={6} className='column' >
            <CircleTile data={db.myScores.customerSatisfaction} />
            <CircleTile data={db.myScores.bonusPoints} />
            <GraphTile data={db.myScores.dataQuality} />
            <CircleTile data={db.myScores.accuracy} />
            <WideBoyTile data={db.myScores.locations} />
          </Col>
          <Col xs={12} s={12} md={3} className='column' >
            <NewsFeed props={db.newsFeed} />
          </Col>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(Dashboard)
