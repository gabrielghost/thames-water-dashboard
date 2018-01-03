import React from 'react'

export default (props) => {
  let number = props.number

  const indicator = function (number) {
    if (number === 0) return ''
    if (number > 0) return '+'
    if (number < 0) return '-'
  }

  return (<div className='pointsBadge'><p>{indicator(number)}{number} points</p></div>)
}
