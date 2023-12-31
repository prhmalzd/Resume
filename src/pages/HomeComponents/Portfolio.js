import { Link } from 'react-router-dom'
import './portfolio.css'
import martien from '../../imgs/martien.png'
import controltheboss from '../../imgs/controltheboss.png'
import rpsls from '../../imgs/rpsls.png'

const Portfolio = ({aboutMeRef,portfolioRef}) => {
  

  return (
    <div ref={aboutMeRef} className='portfolioSection'>

      <div className="portfolioSection__header">
        <span>Hey!</span>
        <p>I'm Parham Alizadeh from Iran!</p>
        <p>I love Programming, as well as drawing, woodcrafting and creating new things!</p>
        <p>Feel free to get in touch or take a look at my past work below:</p>
      </div>

      <div ref={portfolioRef} className='portfolioSection__portfoliHeader'>
      <span>Portfolio</span>
      </div>

      <div className='portfolioSection__topProjects'>
      <span>My Early Projects</span>
      </div>

      <div className='portfolioSection__portfolioDis'>

        <div className='portfolioSection__portfolioDis__onePortfolio' style={{backgroundColor: "rgb(243, 255, 135)"}}>
          <div className='portfolioSection__portfolioDis__onePortfolio__imgHolder controlthebossImgHandler'>
              <img src={controltheboss} alt='controlthebossgamescene'/>
          </div>

          <div className='portfolioSection__portfolioDis__onePortfolio__infoHolder'>
            <span>Control The Boss</span>
            <p>A game designed for controlling your boss, and moving it for your desires. Employes must wash hands.</p>
            <a href='https://control-the-boss.vercel.app'><button>Play</button></a>
          </div>
        </div>

        <div className='portfolioSection__portfolioDis__onePortfolio' style={{backgroundColor: "rgb(141, 141, 141)"}}>
          <div className='portfolioSection__portfolioDis__onePortfolio__imgHolder'>
            <img src={rpsls} alt='controlthebossgamescene'/>
          </div>

          <div className='portfolioSection__portfolioDis__onePortfolio__infoHolder'>
            <span>Rock Paper Scissors Lizard Spock</span>
            <p>A game designed by Sheldon Cooper, developed from Old game called Rock Paper Scissors.</p>
            <Link to='/RPSLS'><button>Play</button></Link>
          </div>
        </div>

        <div className='portfolioSection__portfolioDis__onePortfolio' style={{backgroundColor: "rgb(217, 0, 236)"}}>
          <div className='portfolioSection__portfolioDis__onePortfolio__imgHolder'>
            <img src={martien} alt='controlthebossgamescene'/>
          </div>

          <div className='portfolioSection__portfolioDis__onePortfolio__infoHolder'>
            <span>Martien Mike</span>
            <p>A game designed with GDScript in Godot Engine, as you can download and play it in Linux.</p>
            <Link to='https://github.com/prhmalzd/martienMike'><button>Code Source</button></Link>
          </div>
        </div>

      </div>

      <div className='portfolioSection__otherProjects'>
        <span>Some Other Projects...</span>
        <div className='portfolioSection__otherProjects__project'>
          <p>1. TypeScript with Redux</p>
          <Link to='https://github.com/prhmalzd/ts_with_react_redux'><button>Code</button></Link>
        </div>
        <div className='portfolioSection__otherProjects__project'>
          <p>2. TypeScript In-Browser-bundling</p>
          <Link to='https://github.com/prhmalzd/in-browser-bundling'><button>Code</button></Link>
        </div>
        <div className='portfolioSection__otherProjects__project'>
          <p>3. GraphQL training</p>
          <Link to='https://github.com/prhmalzd/graphql-training'><button>Code</button></Link>
        </div>
        <div className='portfolioSection__otherProjects__project'>
          <p>4. RestApi training</p>
          <Link to='https://github.com/prhmalzd/blogStein-api-training'><button>Code</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Portfolio