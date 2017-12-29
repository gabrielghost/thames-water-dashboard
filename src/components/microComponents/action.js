import React from 'react'

export default (props) => {
  console.log(props)

  let indicatorText = function (number) {
    if (number > 0) {
      return 'up'
    } else if (number < 0) {
      return 'down'
    }
  }

  if (props.obj.type === 'overtaken') {
    return (<div className={'action'}>
      <div className={'actionIcon'}></div>
      <div className={'actionBody'}><p>Your team has overtaken {props.obj.arg1}</p></div>
    </div>)
  }

  if (props.obj.type === 'achievement') {
    return (<div className={'action'}>
      <div className={'actionIcon'}></div>
      <div className={'actionBody'}><p>{props.obj.arg1}</p></div>
    </div>)
  }

  if (props.obj.type === 'errors') {
    return (<div className={'action'}>
      <div className={'actionIcon'}></div>
      <div className={'actionBody'}><p>Errors are {indicatorText(props.obj.arg1)} {props.obj.arg1}% this {props.obj.arg2}!</p></div>
    </div>)
  }

  if (props.obj.type === 'topLeaderboard') {
    return (<div className={'action'}>
      <div className={'actionIcon'}></div>
      <div className={'actionBody'}><p>{props.obj.goal}</p></div>
    </div>)
  }

  if (props.obj.type === 'accuracy') {
    return (<div className={'action'}>
      <div className={'actionIcon'}></div>
      <div className={'actionBody'}><p>{props.obj.goal}</p></div>
    </div>)
  }

  if (props.obj.type === 'sitesAudit') {
    return (<div className={'action'}>
      <div className={'actionIcon'}></div>
      <div className={'actionBody'}><p>{props.obj.goal}</p></div>
    </div>)
  }
}
