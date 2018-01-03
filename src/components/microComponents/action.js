import React from 'react'
import Progressbar from 'react-progressbar'

export default (props) => {

let progressValue = function (current, target){
  return Math.round((current / target) * 100)
}

  let indicatorText = function (number) {
    if (number > 0) {
      return 'up'
    } else if (number < 0) {
      return 'down'
    }
  }

  if (props.obj.type === 'overtaken') {
    return (<div className={'action'}>
      <div className={'actionIcon'}><img src={props.obj.icon} /></div>
      <div className={'actionBody'}><p>Your team has overtaken <span style={{fontWeight: 'bold', margin: '0 1px'}}>{props.obj.arg1}</span></p></div>
    </div>)
  }

  if (props.obj.type === 'achievement') {
    return (<div className={'action'}>
      <div className={'actionIcon'}><img src={props.obj.icon} /></div>
      <div className={'actionBody'}><p>{props.obj.arg1}</p></div>
    </div>)
  }

  if (props.obj.type === 'errors') {
    return (<div className={'action'}>
      <div className={'actionIcon'}><img src={props.obj.icon} /></div>
      <div className={'actionBody'}><p>Errors are <span style={{fontWeight: 'bold', margin: '0 3px'}}>{indicatorText(props.obj.arg1)}</span><span style={{fontWeight: 'bold', margin: '0 3px'}}>{props.obj.arg1}%</span>  this <span style={{fontWeight: 'bold', margin: '0 3px'}}> {props.obj.arg2} </span>!</p></div>
    </div>)
  }

  if (props.obj.type === 'topLeaderboard') {
    return (<div className={'action'}>
      <div className={'actionIcon'}><img src={props.obj.icon} /></div>
      <div className={'actionBody'}><p>{props.obj.goal}</p></div>
    </div>)
  }

  if (props.obj.type === 'accuracy') {
    return (<div className={'action'}>
      <div className={'actionIcon'}><img src={props.obj.icon} /></div>
      <div className={'actionBody'}>
        <p>{props.obj.goal}</p>
        <p className={'percentComplete'}>{progressValue(props.obj.current, props.obj.target)}% complete</p>
        <Progressbar color={'#1E1E69'} completed={progressValue(props.obj.current, props.obj.target)} />
      </div>
    </div>)
  }

  if (props.obj.type === 'sitesAudit') {
    return (<div className={'action'}>
      <div className={'actionIcon'}><img src={props.obj.icon} /></div>
      <div className={'actionBody'}>
        <p>{props.obj.goal}</p>
        <p className={'percentComplete'}>{progressValue(props.obj.current, props.obj.target)}% complete</p>
        <Progressbar color={'#1E1E69'} completed={progressValue(props.obj.current, props.obj.target)} />
      </div>
    </div>)
  }
  if (props.obj.type === 'siteVisit') {
    return (<div className={'action'}>
      <div className={'actionIcon'}><img src={props.obj.icon} /></div>
      <div className={'actionBody'}>
        <p>{props.obj.goal}</p>
        <p className={'percentComplete'}>{progressValue(props.obj.current, props.obj.target)}% complete</p>
        <Progressbar color={'#1E1E69'} completed={progressValue(props.obj.current, props.obj.target)} />
      </div>
    </div>)
  }
  if (props.obj.type === 'customerSatisfaction') {
    return (<div className={'action'}>
      <div className={'actionIcon'}><img src={props.obj.icon} /></div>
      <div className={'actionBody'}>
        <p>{props.obj.goal}</p>
        <p className={'percentComplete'}>{progressValue(props.obj.current, props.obj.target)}% complete</p>
        <Progressbar color={'#1E1E69'} completed={progressValue(props.obj.current, props.obj.target)} />
      </div>
    </div>)
  }
  if (props.obj.type === 'video') {
    return (<div className={'action'}>
      <div className={'actionIcon'}><img src={props.obj.icon} /></div>
      <div className={'actionBody'}>
        <p>{props.obj.goal}</p>
        <p className={'percentComplete'}>{progressValue(props.obj.current, props.obj.target)}% complete</p>
        <Progressbar color={'#1E1E69'} completed={progressValue(props.obj.current, props.obj.target)} />
      </div>
    </div>)
  }
}
