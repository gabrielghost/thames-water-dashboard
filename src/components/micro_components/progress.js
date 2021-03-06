import React from 'react'
import Progressbar from './progressbar'

export default (props) => {
  let arr = props.data
  const arrSum = function (arr) {
    return arr.reduce((a, b) => a + b, 0)
  }
  let current
  let duration
  let monthArr
  let monthSum
  let weekArr
  let weekSum
  let max = 10;
  if (props.timeframe === 'month') {
    monthArr = arr.slice(0, 19)
    monthSum = arrSum(monthArr)
    // current = Math.round(monthSum / monthArr.length)
    current = 8
  }
  if (props.timeframe === 'week') {
    weekArr = arr.slice(0, 4)
    weekSum = arrSum(weekArr)
    // current = Math.round(weekSum / weekArr.length)
    current = 6
  }
  let progressValue = function (current, target) {
    return Math.round((current / target) * 100)
  }

  let cent = progressValue(current, max)

  return (<Progressbar color={'linear-gradient( to right, red, orange, yellow, green)'} backgroundSize={`${100 + (100 - cent)}%`} completed={cent} />)
}
