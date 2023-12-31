import './timeline.css'
import TimlelineRight from './timelinecomp/TimelineRight'
import TimelineLeft from './timelinecomp/TimlineLeft'
import {timelineInfos} from './timelinecomp/timeLineInfos'

const Timeline = () => {


  return (
    <div className="timeline">
      <span className='timeline__header'>Time Line</span>
      <TimelineLeft infos={timelineInfos[4]} gridArea={'1/1/2/2'}/>
      <TimelineLeft infos={timelineInfos[2]} gridArea={'3/1/4/2'}/>
      <TimelineLeft infos={timelineInfos[0]} gridArea={'5/1/6/2'}/>
      <div className='timeline__line'></div>
      <TimlelineRight infos={timelineInfos[3]} gridArea={'2/3/3/4'}/>
      <TimlelineRight infos={timelineInfos[1]} gridArea={'4/3/5/4'}/>
    </div>
  )
}

export default Timeline