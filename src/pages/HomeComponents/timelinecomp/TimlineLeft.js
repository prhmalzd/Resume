import { useRef , useState, useEffect } from "react";

const TimelineLeft = ({gridArea, infos}) => {
  const [isIntersecting__disc, setIsIntersecting__disc] = useState(false);
  const ref__dics = useRef(null);
  const ref__date = useRef(null);

  useEffect(() => {
    const observer__disc = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting__disc(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );
    observer__disc.observe(ref__dics.current);

    return () => observer__disc.disconnect();
  }, [isIntersecting__disc]);

  useEffect(() => {
    if (isIntersecting__disc) {
      ref__dics.current.classList.add('show-in-disc')
      ref__date.current.classList.add('show-in-date')
    }
  }, [isIntersecting__disc]);

  return (
    <div className='timeline__left' style={{gridArea : gridArea}}>

      <div ref={ref__dics} className='timeline__left__disc'>
        <span className='timeline__left__disc_name'>{infos.name}</span>
        <p>
          {infos.disc}
        </p>
      </div>

      <div ref={ref__date} className='timeline__left__logo'>
        <div></div>
        <span className='timeline__left__logo__date'>{infos.date}</span>
      </div>

    </div>
  )
}

export default TimelineLeft