import { useRef , useState, useEffect } from "react";


const TimlelineRight = ({gridArea, infos}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref__disc = useRef(null);
  const ref__date = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );
    observer.observe(ref__disc.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref__disc.current.classList.add('show-in-disc')
      ref__date.current.classList.add('show-in-date')
    }
  }, [isIntersecting]);


  return (
    <div className='timeline__right' style={{gridArea: gridArea}}>

    <div ref={ref__date} className='timeline__right__logo'>
      <span className='timeline__right__logo__date'>{infos.date}</span>
      <div></div>
    </div>

    <div ref={ref__disc} className='timeline__right__disc'>
      <span className='timeline__right__disc_name'>{infos.name}</span>
      <p>
        {infos.disc}
      </p>
    </div>

  </div>
  )
}

export default TimlelineRight