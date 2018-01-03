import { data } from '../db/data'
import { initData } from '../db/initdata'
import {
  FETCH_DATA,
  INITIALIZE,
  CHART_WEEK,
  CHART_MONTH,
  CHART_ALL_TIME,
  LEADERBOARD_WEEK,
  LEADERBOARD_MONTH,
  TOGGLE_NOTIFICATIONS,
  TOGGLE_BADGES
} from './types'

export function fetchData () {
  return function (dispatch) {
    dispatch({
      type: FETCH_DATA,
      payload: data
    })
  }
}
export function chartType (type) {
  return function (dispatch) {
    dispatch({
      type: CHART_WEEK,
      payload: type
    })
  }
}
export function toggleNotifications () {
  return function (dispatch) {
    dispatch({
      type: TOGGLE_NOTIFICATIONS
    })
  }
}
export function toggleBadges () {
  return function (dispatch) {
    dispatch({
      type: TOGGLE_BADGES
    })
  }
}
export function leaderboardTimeScale (type) {
  if (type === 'week') {
    return function (dispatch) {
      dispatch({
        type: LEADERBOARD_WEEK,
        payload: type
      })
    }
  } else if (type === 'month') {
    return function (dispatch) {
      dispatch({
        type: LEADERBOARD_MONTH,
        payload: type
      })
    }
  }
}
export function initialize () {
  return function (dispatch) {
    dispatch({
      type: INITIALIZE,
      payload: initData
    })
  }
}
