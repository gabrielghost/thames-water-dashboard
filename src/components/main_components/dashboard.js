import React, { Component } from 'react'
import { connect } from 'react-redux'
import CircleTile from '../tile_components/circleTile'
import ChartTile from '../tile_components/chartTile'
import WideBoyTile from '../tile_components/wideboytile'
import LeaderBoard from '../tile_components/leaderboard'
import NotificationsTile from '../tile_components/notificationsTile'
import BadgesTile from '../tile_components/badgesTile'
import NewsFeed from '../tile_components/newsfeed'
import Header from './header'
import * as actions from '../../actions'
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
            <NotificationsTile data={db.notifications} />
            <BadgesTile data={db.badges} />
            <LeaderBoard data={db.teamScores} />
          </Col>
          <Col xs={12} s={12} md={3} lg={6} className='column' >
            <CircleTile data={db.myScores.customerSatisfaction} />
            <CircleTile data={db.myScores.bonusPoints} />
            <ChartTile data={db.myScores.dataQuality} />
            <CircleTile data={db.myScores.accuracy} />
            <WideBoyTile data={db.myScores.locations} />
          </Col>
          <Col xs={12} s={12} md={3} className='column' >
            <NewsFeed data={db.newsFeed} />
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
