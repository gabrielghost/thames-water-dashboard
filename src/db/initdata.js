export const dashReducer = {
  state: { mainGraph: 0 },
  userName: 'Praful Yadev',
  teamName: 'Southern Sharks',
  myScores: {
    overall: {
      target: 450,
      today: 374,
      history: [ {1: 373}, {2: 50}, {3: 40}, {4: 93}, {5: 400}, {6: 405}, {7: 460}, {8: 466}, {9: 467} ]
    },
    customerSatisfaction: {
      title: 'Customer Satisfaction',
      today: 4.6,
      target: 4.5,
      history: [ 4.0, 3.4, 3.8, 3.9, 4.0, 4.0, 3.4, 3.8, 3.9, 4.0, 4.0, 3.4, 3.8, 3.9, 4.0, 4.0, 3.4, 3.8, 3.9, 4.0 ]
    },
    dataQuality: {
      title: 'Data Quality',
      today: 73,
      target: {
        base: 83,
        dailyIncrease: 2
      },
      history: [
        {name: '10th', user: 20},
        {user: 30},
        {user: 40},
        {user: 35},
        {user: 37},
        {user: 38, amt: 1},
        {user: 32, amt: 1},
        {user: 30, amt: 1},
        {user: 29, amt: 1},
        {user: 4, amt: 1},
        {name: '20th', user: 17, amt: 1},
        {user: 23, amt: 1},
        {user: 25, amt: 1},
        {user: 30, amt: 1},
        {user: 34, amt: 1},
        {user: 40, amt: 1},
        {user: 44, amt: 1},
        {user: 48, amt: 1},
        {user: 49, amt: 1},
        {user: 50, amt: 1},
        {name: '30th', user: 45, amt: 1},
        {user: 30, amt: 1},
        {user: 60, amt: 1},
        {user: 63, amt: 1},
        {user: 67, amt: 1},
        {user: 73, amt: 1}
       ]
    },
    bonusPoints: {
      title: 'Bonus Points',
      today: 14,
      target: 20,
      history: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 23, 34, 26, 21, 19, 18, 15, 14, 12, 16, 17, 17, 15, 13, 12, 12, 13, 14, 16, 19, 20, 21, 22, 23, 34, 9 ]
    },
    accuracy: {
      title: 'Accuracy',
      history: [ 6, 5, 7, 3, 4, 5, 6, 4, 7, 8, 4, 2, 6, 5, 7, 3, 4, 5, 6, 4, 7, 8, 4, 2, 6, 5, 7, 3, 4, 5, 6, 4, 7, 8, 4, 2, 6, 5, 7, 3, 4, 5, 6, 4, 7, 8, 4, 2, 6, 5, 7, 3, 4, 5, 6, 4, 7, 8, 4, 2 ]
    },
    locations: {
      title: 'Locations',
      circle1: { title: 'SITES CONFIRMED AS PUMPING STATION', value: 3824 },
      circle2: { title: 'SITES VISITED AND AUDITED', value: 2156 },
      circle3: { title: 'CONFIRMED THIS WEEK', history: [13, 16, 18, 17, 25] },
      circle4: { title: 'CONFIRMED THIS MONTH', history: [13, 16, 18, 17, 25, 13, 16, 18, 17, 25, 13, 16, 18, 17, 25, 13, 16, 18, 17, 25] }
    }
  },
  myTeamScores: {
    target: 450,
    today: 374,
    history: [
      // [ {1: 373}, {2: 50}, {3: 40}, {4: 93}, {5: 400}, {6: 405}, {7: 460}, {8: 466}, {9: 467} ]
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1}
    ],
    history1: [
      {name: '1st', team: 373, user: 323, amt: 1},
      {name: '', team: 50, user: 30, amt: 1},
      {name: '', team: 40, user: 60, amt: 1},
      {name: '', team: 93, user: 130, amt: 1},
      {name: '', team: 400, user: 230, amt: 1},
      {name: '', team: 405, user: 205, amt: 1},
      {name: '', team: 460, user: 160, amt: 1},
      {name: '7th', team: 373, user: 323, amt: 1},
      {name: '', team: 50, user: 30, amt: 1},
      {name: '', team: 40, user: 60, amt: 1},
      {name: '', team: 93, user: 130, amt: 1},
      {name: '', team: 400, user: 230, amt: 1},
      {name: '', team: 405, user: 205, amt: 1},
      {name: '', team: 460, user: 160, amt: 1},
      {name: '14th', team: 373, user: 323, amt: 1},
      {name: '', team: 50, user: 30, amt: 1},
      {name: '', team: 40, user: 60, amt: 1},
      {name: '', team: 93, user: 130, amt: 1},
      {name: '', team: 400, user: 230, amt: 1},
      {name: '', team: 405, user: 205, amt: 1},
      {name: '', team: 460, user: 160, amt: 1},
      {name: '21st', team: 373, user: 323, amt: 1},
      {name: '', team: 50, user: 30, amt: 1},
      {name: '', team: 40, user: 60, amt: 1},
      {name: '', team: 93, user: 130, amt: 1},
      {name: '', team: 400, user: 230, amt: 1},
      {name: '', team: 405, user: 205, amt: 1},
      {name: '', team: 460, user: 160, amt: 1},
      {name: '28th', team: 373, user: 323, amt: 1},
      {name: '', team: 50, user: 30, amt: 1},
      {name: '', team: 40, user: 60, amt: 1},
      {name: '', team: 93, user: 130, amt: 1},
      {name: '', team: 400, user: 230, amt: 1},
      {name: '', team: 405, user: 205, amt: 1},
      {name: '', team: 460, user: 160, amt: 1}
    ],
    history2: [
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1},
      {name: 'Mon', team: 373, user: 323, amt: 1},
      {name: 'Tue', team: 50, user: 30, amt: 1},
      {name: 'Wed', team: 40, user: 60, amt: 1},
      {name: 'Thur', team: 93, user: 130, amt: 1},
      {name: 'Fri', team: 400, user: 230, amt: 1},
      {name: 'Sat', team: 405, user: 205, amt: 1},
      {name: 'Sun', team: 460, user: 160, amt: 1}
    ]
  },
  notifications: {
    title: 'Notifications',
    data: [
      {
        type: 'overtaken',
        icon: './assets/images/overtaken-icon.png',
        arg1: 'Northern Ninjas'
      },
      {
        type: 'achievement',
        icon: './assets/images/achievement-icon.png',
        arg1: `We've reached our highest quality score in a month`
      },
      {
        type: 'errors',
        icon: './assets/images/errors-icon.png',
        arg1: 10,
        arg2: 'week'
      }
    ]
  },
  newsFeed: {
    title: 'News Feed',
    data: [
      {
        type: 'action',
        name: 'Praful Yadev',
        description: 'Completed a site visit',
        points: 25,
        badge: 'most improved'
      },
      {
        type: 'team achievement',
        name: 'Team Northern Ninjas',
        description: 'Earned a perfect Customer Satisfaction score of',
        score: 5
      },
      {
        type: 'action',
        name: 'Chris Barter',
        description: 'Completed a site visit',
        points: 30,
        badge: 'best this month'
      },
      {
        type: 'video',
        name: 'Chris Barter',
        title: 'Unblocking a flygt pump',
        url: ''
      },
      {
        type: 'badge',
        name: 'Jordan Howard',
        badgeType: 'Helpful Notes',
        number: 15
      },
      {
        type: 'action',
        name: 'Praful Yadev',
        description: 'Completed a site visit',
        points: 25,
        badge: 'most improved'
      },
      {
        type: 'team achievement',
        name: 'Team Northern Ninjas',
        description: 'Earned a perfect Customer Satisfaction score of',
        score: 5
      }
    ]
  },
  badges: {
    title: 'Badges',
    data: [
      {
        icon: './assets/images/audited-badge.png',
        type: 'sitesAudit',
        goal: 'Audit 300 sites',
        current: 200,
        target: 300
      },
      {
        icon: './assets/images/accuracy-badge.png',
        type: 'accuracy',
        goal: '95% accuracy for 3 months',
        current: 250,
        target: 300
      },
      {
        icon: './assets/images/leaderboard-badge.png',
        type: 'topLeaderboard',
        goal: 'Reach the top of the leaderboard',
        current: 5,
        target: 1
      }
    ]
  },
  teamScores: [
    {
      teamName: 'Western Wolves',
      currentScore: 378,
      history: [340, 333, 320, 310, 360, 480, 490, 500]
    },
    {
      teamName: 'Southern Sharks',
      currentScore: 374,
      history: [379, 333, 320, 310, 360, 480, 490, 500]
    },
    {
      teamName: 'Northern Ninjas',
      currentScore: 372,
      history: [370, 333, 320, 310, 360, 480, 490, 500]
    }
  ]
}
