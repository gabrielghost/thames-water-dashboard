import React from 'react'

export default (props) => {
  let number = props.number
  if (number === 0) { return '' }
  return (<div className='unread'><p>{number}</p></div>)
}
