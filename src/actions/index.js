import { data } from '../db/data'
import { initData } from '../db/initdata'
import {
  FETCH_DATA,
  INITIALIZE,
  CHART_WEEK,
  CHART_MONTH,
  CHART_ALL_TIME
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
export function initialize () {
  return function (dispatch) {
    dispatch({
      type: INITIALIZE,
      payload: initData
    })
  }
}
