import React from 'react'

export default (props) => {
  let type = props.type

  const badgeIcon = function (type) {
    if (type === 'Best this month') return '★'
    if (type === 'Most Improved') return '↑'
  }

  const classAssign = function (type) {
    if (type === 'Best this month') return 'bestThisMonth'
    if (type === 'Most Improved') return 'mostImproved'
  }

  return (<div className={`${classAssign(type)} highlightBadge`}>
    <div className='badgeIcon'>{badgeIcon(type)}</div>
    <div className='badgeIconDivider' />
    <div className='badgeText'>{type}</div>
  </div>)
}
