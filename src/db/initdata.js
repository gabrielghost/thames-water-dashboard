export const dashReducer = {
  mainChart: 0,
  leaderBoard: 'week',
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
      {name: '2nd', team: 50, user: 30, amt: 1},
      {name: '3rd', team: 40, user: 60, amt: 1},
      {name: '4th', team: 93, user: 130, amt: 1},
      {name: '5th', team: 400, user: 230, amt: 1},
      {name: '8th', team: 405, user: 205, amt: 1},
      {name: '9th', team: 460, user: 160, amt: 1},
      {name: '10th', team: 373, user: 323, amt: 1},
      {name: '11th', team: 50, user: 30, amt: 1},
      {name: '12th', team: 40, user: 60, amt: 1},
      {name: '14th', team: 93, user: 130, amt: 1},
      {name: '15th', team: 400, user: 230, amt: 1},
      {name: '16th', team: 405, user: 205, amt: 1},
      {name: '17th', team: 460, user: 160, amt: 1},
      {name: '18th', team: 373, user: 323, amt: 1},
      {name: '21st', team: 50, user: 30, amt: 1},
      {name: '22nd', team: 40, user: 60, amt: 1},
      {name: '23rd', team: 93, user: 130, amt: 1},
      {name: '24th', team: 400, user: 230, amt: 1},
      {name: '25th', team: 405, user: 205, amt: 1},
      {name: '28th', team: 460, user: 160, amt: 1},
      {name: '29th', team: 373, user: 323, amt: 1},
      {name: '30th', team: 50, user: 30, amt: 1},
      {name: '31st', team: 40, user: 60, amt: 1},
      {name: '1st', team: 93, user: 130, amt: 1},
      {name: '4th', team: 400, user: 230, amt: 1},
      {name: '5th', team: 405, user: 205, amt: 1},
      {name: '6th', team: 460, user: 160, amt: 1},
      {name: '7th', team: 373, user: 323, amt: 1},
      {name: '8th', team: 50, user: 30, amt: 1},
      {name: '11th', team: 40, user: 60, amt: 1},
      {name: '12th', team: 93, user: 130, amt: 1},
      {name: '13th', team: 400, user: 230, amt: 1},
      {name: '14th', team: 405, user: 205, amt: 1},
      {name: '15th', team: 460, user: 160, amt: 1}
    ],
    history2: [
      {name: '1st', team: 373, user: 323, amt: 1},
      {name: '2nd', team: 50, user: 30, amt: 1},
      {name: '3rd', team: 40, user: 60, amt: 1},
      {name: '4th', team: 93, user: 130, amt: 1},
      {name: '5th', team: 400, user: 230, amt: 1},
      {name: '8th', team: 405, user: 205, amt: 1},
      {name: '9th', team: 460, user: 160, amt: 1},
      {name: '10th', team: 373, user: 323, amt: 1},
      {name: '11th', team: 50, user: 30, amt: 1},
      {name: '12th', team: 40, user: 60, amt: 1},
      {name: '14th', team: 93, user: 130, amt: 1},
      {name: '15th', team: 400, user: 230, amt: 1},
      {name: '16th', team: 405, user: 205, amt: 1},
      {name: '17th', team: 460, user: 160, amt: 1},
      {name: '18th', team: 373, user: 323, amt: 1},
      {name: '21st', team: 50, user: 30, amt: 1},
      {name: '22nd', team: 40, user: 60, amt: 1},
      {name: '23rd', team: 93, user: 130, amt: 1},
      {name: '24th', team: 400, user: 230, amt: 1},
      {name: '25th', team: 405, user: 205, amt: 1},
      {name: '28th', team: 460, user: 160, amt: 1},
      {name: '29th', team: 373, user: 323, amt: 1},
      {name: '30th', team: 50, user: 30, amt: 1},
      {name: '31st', team: 40, user: 60, amt: 1},
      {name: '1st', team: 373, user: 323, amt: 1},
      {name: '2nd', team: 50, user: 30, amt: 1},
      {name: '3rd', team: 40, user: 60, amt: 1},
      {name: '4th', team: 93, user: 130, amt: 1},
      {name: '5th', team: 400, user: 230, amt: 1},
      {name: '8th', team: 405, user: 205, amt: 1},
      {name: '9th', team: 460, user: 160, amt: 1},
      {name: '10th', team: 373, user: 323, amt: 1},
      {name: '11th', team: 50, user: 30, amt: 1},
      {name: '12th', team: 40, user: 60, amt: 1},
      {name: '14th', team: 93, user: 130, amt: 1},
      {name: '15th', team: 400, user: 230, amt: 1},
      {name: '16th', team: 405, user: 205, amt: 1},
      {name: '17th', team: 460, user: 160, amt: 1},
      {name: '18th', team: 373, user: 323, amt: 1},
      {name: '21st', team: 50, user: 30, amt: 1},
      {name: '22nd', team: 40, user: 60, amt: 1},
      {name: '23rd', team: 93, user: 130, amt: 1},
      {name: '24th', team: 400, user: 230, amt: 1},
      {name: '25th', team: 405, user: 205, amt: 1},
      {name: '28th', team: 460, user: 160, amt: 1},
      {name: '29th', team: 373, user: 323, amt: 1},
      {name: '30th', team: 50, user: 30, amt: 1},
      {name: '31st', team: 40, user: 60, amt: 1},
      {name: '1st', team: 373, user: 323, amt: 1},
      {name: '2nd', team: 50, user: 30, amt: 1},
      {name: '3rd', team: 40, user: 60, amt: 1},
      {name: '4th', team: 93, user: 130, amt: 1},
      {name: '5th', team: 400, user: 230, amt: 1},
      {name: '8th', team: 405, user: 205, amt: 1},
      {name: '9th', team: 460, user: 160, amt: 1},
      {name: '10th', team: 373, user: 323, amt: 1},
      {name: '11th', team: 50, user: 30, amt: 1},
      {name: '12th', team: 40, user: 60, amt: 1},
      {name: '14th', team: 93, user: 130, amt: 1},
      {name: '15th', team: 400, user: 230, amt: 1},
      {name: '16th', team: 405, user: 205, amt: 1},
      {name: '17th', team: 460, user: 160, amt: 1},
      {name: '18th', team: 373, user: 323, amt: 1},
      {name: '21st', team: 50, user: 30, amt: 1},
      {name: '22nd', team: 40, user: 60, amt: 1},
      {name: '23rd', team: 93, user: 130, amt: 1},
      {name: '24th', team: 400, user: 230, amt: 1},
      {name: '25th', team: 405, user: 205, amt: 1},
      {name: '28th', team: 460, user: 160, amt: 1},
      {name: '29th', team: 373, user: 323, amt: 1},
      {name: '30th', team: 50, user: 30, amt: 1},
      {name: '31st', team: 40, user: 60, amt: 1},
      {name: '1st', team: 373, user: 323, amt: 1},
      {name: '2nd', team: 50, user: 30, amt: 1},
      {name: '3rd', team: 40, user: 60, amt: 1},
      {name: '4th', team: 93, user: 130, amt: 1},
      {name: '5th', team: 400, user: 230, amt: 1},
      {name: '8th', team: 405, user: 205, amt: 1},
      {name: '9th', team: 460, user: 160, amt: 1},
      {name: '10th', team: 373, user: 323, amt: 1},
      {name: '11th', team: 50, user: 30, amt: 1},
      {name: '12th', team: 40, user: 60, amt: 1},
      {name: '14th', team: 93, user: 130, amt: 1},
      {name: '15th', team: 400, user: 230, amt: 1},
      {name: '16th', team: 405, user: 205, amt: 1},
      {name: '17th', team: 460, user: 160, amt: 1},
      {name: '18th', team: 373, user: 323, amt: 1},
      {name: '21st', team: 50, user: 30, amt: 1},
      {name: '22nd', team: 40, user: 60, amt: 1},
      {name: '23rd', team: 93, user: 130, amt: 1},
      {name: '24th', team: 400, user: 230, amt: 1},
      {name: '25th', team: 405, user: 205, amt: 1},
      {name: '28th', team: 460, user: 160, amt: 1},
      {name: '29th', team: 373, user: 323, amt: 1},
      {name: '30th', team: 50, user: 30, amt: 1},
      {name: '31st', team: 40, user: 60, amt: 1}
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
        img: './assets/images/praful-yadev-profile.png',
        type: 'action',
        name: 'Praful Yadev',
        description: 'Completed a site visit',
        points: 25,
        badge: 'Most Improved'
      },
      {
        img: './assets/images/northern-ninjas-logo.png',
        type: 'team achievement',
        name: 'Team Northern Ninjas',
        description: 'Earned a perfect Customer Satisfaction score of',
        score: '5/5'
      },
      {
        img: './assets/images/chris-barter-profile.png',
        type: 'action',
        name: 'Chris Barter',
        description: 'Completed a site visit',
        points: 30,
        badge: 'Best this month'
      },
      {
        img: './assets/images/gary-walters-profile.png',
        type: 'video',
        name: 'Gary Walters',
        title: 'Unblocking a flygt pump',
        url: './assets/images/video-image.jpg'
      },
      {
        img: './assets/images/jordan-howard-profile.png',
        type: 'badge',
        name: 'Jordan Howard',
        badgeType: 'Helpful Notes',
        description: 'For writing 15 useful notes!',
        img2: './assets/images/helpful-notes-badge.png',
        number: 15
      },
      {
        img: './assets/images/praful-yadev-profile.png',
        type: 'action',
        name: 'Praful Yadev',
        description: 'Completed a site visit',
        points: 25,
        badge: 'Most Improved'
      },
      {
        img: './assets/images/northern-ninjas-logo.png',
        type: 'team achievement',
        name: 'Team Northern Ninjas',
        description: 'Earned a perfect Customer Satisfaction score of',
        score: '5/5'
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
  teamScores: {
    title: 'Leaderboard',
    view: 0,
    data: [
      {
        teamName: 'Western Wolves',
        logo: './assets/images/western-wolves-logo.png',
        thisWeek: 3,
        lastWeek: 2,
        thisMonth: 1,
        lastMonth: 2,
        history: [340, 340, 320, 600]
      },
      {
        teamName: 'Southern Sharks',
        logo: './assets/images/southern-sharks-logo.png',
        thisWeek: 1,
        lastWeek: 1,
        thisMonth: 2,
        lastMonth: 3,
        history: [379, 270, 370, 340]
      },
      {
        teamName: 'Northern Ninjas',
        logo: './assets/images/northern-ninjas-logo.png',
        thisWeek: 2,
        lastWeek: 3,
        thisMonth: 3,
        lastMonth: 1,
        history: [370, 333, 320, 310]
      }
    ]
  }
}
