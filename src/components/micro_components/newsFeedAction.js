import React from 'react'
import PointsBadge from './pointsBadge'
import HighlightBadge from './highlightBadge'

export default (props) => {

  const pointsBadge = function (number) {
    if (number) {
      return <PointsBadge number={props.obj.points} />
    } else {
      return ''
    }
  }
  const highlightBadge = function (type) {
    if (type) {
      return <HighlightBadge type={props.obj.badge} />
    } else {
      return ''
    }
  }

  if (props.obj.type === 'action') {
    return (<div className={'newsFeedAction newsFeedAction'}>
      <div className={'newsFeedActionIcon'}><img src={props.obj.img} /></div>
      <div className={'newsFeedActionBody'}>
        <p className='newsFeedName'>{props.obj.name}</p>
        <p>{props.obj.description}</p>
        <p>{pointsBadge(props.obj.points)}{highlightBadge(props.obj.badge)}</p>
      </div>
    </div>)
  }
  if (props.obj.type === 'team achievement') {
    return (<div className={'newsFeedAction teamAchievement'}>
      <div className={'newsFeedActionIcon'}><img src={props.obj.img} /></div>
      <div className={'newsFeedActionBody'}>
        <p className='newsFeedName'>{props.obj.name}</p>
        <p>{props.obj.description} <span className='newsFeedHi'>{props.obj.score}</span></p>

      </div>
    </div>)
  }
  if (props.obj.type === 'video') {
    return (<div className={'newsFeedAction video'}>
      <div className={'newsFeedActionIcon'}><img src={props.obj.img} /></div>
      <div className={'newsFeedActionBody'}>
        <p className='newsFeedName'>{props.obj.name}</p>
        <p>Uploaded a video - <span className='newsFeedHi'>{props.obj.title}</span></p>
        <img src={props.obj.url} />
      </div>
    </div>)
  }
  if (props.obj.type === 'badge') {
    return (<div className={'newsFeedAction newsFeedBadge'}>
      <div className={'newsFeedActionIcon'}><img src={props.obj.img} /></div>
      <div className='newsFeedBadgeIcon'><img src={props.obj.img2} /></div>
      <div className={'newsFeedActionBody'}>
        <p className='newsFeedName'>{props.obj.name}</p>
        <p>Earned a badge - <span className='newsFeedHi'>"{props.obj.badgeType}"</span></p>
        <p className='badgeDescription'>{props.obj.description}</p>
      </div>

    </div>)
  }
}
