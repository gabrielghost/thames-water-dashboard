import { FETCH_DATA, INITIALIZE, CHART_WEEK, CHART_MONTH, CHART_ALL_TIME, LEADERBOARD_WEEK, LEADERBOARD_MONTH, TOGGLE_NOTIFICATIONS, TOGGLE_BADGES } from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.payload }
    case INITIALIZE:
      return { ...state, data: action.payload }
    case CHART_WEEK:
      return { ...state, mainChart: action.payload }
    case CHART_MONTH:
      return { ...state, mainChart: action.payload }
    case CHART_ALL_TIME:
      return { ...state, mainChart: action.payload }
    case LEADERBOARD_WEEK:
      return { ...state, leaderBoard: action.payload }
    case LEADERBOARD_MONTH:
      return { ...state, leaderBoard: action.payload }
    case TOGGLE_NOTIFICATIONS:
      return { ...state, viewAllNotifications: !state.viewAllNotifications }
    case TOGGLE_BADGES:
      return { ...state, viewAllBadges: !state.viewAllBadges }
  }

  return state
}
