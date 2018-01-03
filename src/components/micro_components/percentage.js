import React from 'react'
import Indicator from './indicator.js'

export default (props) => {
  let arr = props.array
  let timescale = props.timescale

  const percentage = function (arr, timescale) {
    let weekArr
    let weekSum
    let monthArr
    let monthSum
    const sum = arrSum(arr)
    if (timescale === 'month') {
      monthArr = arr.slice(0, 19)
      monthSum = arrSum(monthArr)
      return Math.round(((monthSum / monthArr.length) / (sum / arr.length) - 1) * 100)
    }
    if (timescale === 'week') {
      weekArr = arr.slice(0, 4)
      weekSum = arrSum(weekArr)
      return Math.round(((weekSum / weekArr.length) / (sum / arr.length) - 1) * 100)
    }
  }

  const arrSum = function (arr) {
    return arr.reduce((a, b) => a + b, 0)
  }

  const classAssign = function (number) {
    if (number === 0) return 'neutral'
    if (number > 0) return 'positive'
    if (number < 0) return 'negative'
  }

  let cent = percentage(arr, timescale)

  let style = classAssign(cent)

  return (<div className={style}><p className={`number`}>{Math.abs(cent)}%</p><Indicator number={cent} size={'regular'} /></div>)
}
