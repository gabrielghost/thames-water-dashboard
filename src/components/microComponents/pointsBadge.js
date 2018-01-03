import React from 'react'

export default (props) => {
  let number = props.number

  const indicator = function (number) {
    if (number === 0) return ''
    if (number > 0) return '+'
    if (number < 0) return '-'
  }

  return (<div className='pointsBadge'>{indicator(number)}{number} points</div>)
}
