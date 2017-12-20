import { data } from '../db/data'
import { initData } from '../db/initdata'
import {
  FETCH_DATA,
  INITIALIZE,
  GRAPH_WEEK,
  GRAPH_MONTH,
  GRAPH_ALL_TIME
} from './types'

export function fetchData () {
  return function (dispatch) {
    dispatch({
      type: FETCH_DATA,
      payload: data
    })
  }
}
export function graphType (type) {
  return function (dispatch) {
    dispatch({
      type: GRAPH_WEEK,
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
