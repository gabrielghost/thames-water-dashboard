import React from 'react'

export default (props) => {
  let number = props.number
  let size = props.size

  const indicator = function (number) {
    if (number === 0) return '–'
    if (number > 0) return '▲'
    if (number < 0) return '▼'
  }

  const classAssign = function (number) {
    if (number === 0) return 'neutral'
    if (number > 0) return 'positive'
    if (number < 0) return 'negative'
  }

  const indicatorSize = function (size) {
    if (size === 'large') {
      return 'indicatorLarge'
    } else { return 'indicator' }
  }

  return (<p className={`${classAssign(number)} ${indicatorSize(size)}`}>{indicator(number)}</p>)
}
