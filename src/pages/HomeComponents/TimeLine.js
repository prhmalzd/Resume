import './timeline.css'
import TimlelineRight from './timelinecomp/TimelineRight'
import TimelineLeft from './timelinecomp/TimlineLeft'
import {timelineInfos} from './timelinecomp/timeLineInfos'

const Timeline = () => {


  return (
    <div className="timeline">
      <span className='timeline__header'>Time Line</span>
      <TimelineLeft infos={timelineInfos[4]} gridArea={'2/1/3/2'}/>
      <TimelineLeft infos={timelineInfos[2]} gridArea={'4/1/5/2'}/>
      <TimelineLeft infos={timelineInfos[0]} gridArea={'6/1/7/2'}/>
      <div className='timeline__line'></div>
      <TimlelineRight infos={timelineInfos[5]} gridArea={'1/3/2/4'}/>
      <TimlelineRight infos={timelineInfos[3]} gridArea={'3/3/4/4'}/>
      <TimlelineRight infos={timelineInfos[1]} gridArea={'5/3/6/4'}/>
    </div>
  )
}

export default Timeline