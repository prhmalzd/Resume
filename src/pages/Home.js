import Footer from './HomeComponents/Footer';
import HomePage from './HomeComponents/HomePage';
import NavigationBar from './HomeComponents/NavigationBar';
import Portfolio from './HomeComponents/Portfolio';
import Timeline from './HomeComponents/TimeLine';
import { useRef } from 'react';

function Home() {
  
  const aboutMeRef = useRef(null)
  const portfolioRef = useRef(null)

  const aboutme = () => {
    aboutMeRef.current.scrollIntoView({behavior: 'smooth'})
  }
  const portfolio = () => {
    portfolioRef.current.scrollIntoView({behavior: 'smooth'})

  }

  return (
    <div className="App">
      <NavigationBar aboutme={aboutme} portfolio={portfolio}/>
      <HomePage/>
      <Portfolio aboutMeRef={aboutMeRef} portfolioRef={portfolioRef}/>
      <Timeline/>
      <Footer aboutme={aboutme} portfolio={portfolio}/>
    </div>
  );
}

export default Home;
