import React, { Component } from 'react'
import { connect } from 'react-redux'
import CircleTile from './tiles/circleTile'
import GraphTile from './tiles/graphTile'
import WideBoyTile from './tiles/wideboytile'
import LeaderBoard from './tiles/leaderboard'
import ActionList from './tiles/actionlist'
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
    console.log(db)
    return (
      <div>
        <Header />
        <Grid>
          <Col xs={12} md={3} className='column' >
            <ActionList props={db.notifications} />
            <ActionList props={db.badges} />
            <LeaderBoard />
          </Col>
          <Col xs={12} md={6} className='column' >
            <CircleTile props={db.myScores.customerSatisfaction} tileTitle={'Customer Satisfaction'} mainScore={db.myScores.customerSatisfaction.today} />
            <CircleTile props={db.myScores.bonusPoints} tileTitle={'Bonus Points'} />
            <GraphTile props={db.myScores.dataQuality} tileTitle={'Data Quality'} />
            <CircleTile props={db.myScores.accuracy} tileTitle={'Accuracy'}/>
            <WideBoyTile props={db.myScores.locations} />
          </Col>
          <Col xs={12} md={3} className='column' >
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
