import { Link } from 'react-router-dom'
import './navigationbar.css'

const NavigationBar = ({aboutme, portfolio , anotherPage}) => {


  return (
    <div className="navbar">

      <div className="navbar__left">
        <span className="navbar__left__name">Parham Alizadeh</span>
      </div>

      {!anotherPage &&
        <div className="navbar__right">
          <span onClick={portfolio} className="navbar__left__portfolio">PORTFOLIO</span>
          <span onClick={aboutme} className="navbar__right__aboutMe">ABOUT ME</span>
        </div>
      }
      {anotherPage &&
        <div className="navbar__right">
          <span className="navbar__right__aboutMe"><Link to='/'>HOME</Link></span>
        </div>
      }
    </div>
  )
}

export default NavigationBar