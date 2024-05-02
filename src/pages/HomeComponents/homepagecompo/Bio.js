import './bio.css'
import prof from '../../../imgs/profile.jpg'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Bio = () => {
  const [showGit, setShowGit] = useState(false)
  const [showTwitter, setShowTwitter] = useState(false)
  const [showInsta, setShowInsta] = useState(false)
  const [showGmail, setShowGmail] = useState(false)

  const showGitHubLink = () => {
    setShowGit(true)
  }
  const showTwitterLink = () => {
    setShowTwitter(true)
  }
  const showInstaLink = () => {
    setShowInsta(true)
  }
  const showGmailLink = () => {
    setShowGmail(true)
  }
  const hideLinks = () => {
    setShowGit(false)
    setShowTwitter(false)
    setShowInsta(false)
    setShowGmail(false)
  }

  
  return (
    <div className="bio">
      <div className="bio__profpicHolder">
        <img src={prof} alt="" />
      </div>
      <span className="bio__name">Parham Alizadeh</span>
      <span className="bio__discrip">Gamer, Developer & Thinker</span>
      <div className="bio__links">
        <Link to="https://github.com/prhmalzd"><FaGithub onMouseEnter={showGitHubLink} onMouseLeave={hideLinks}/></Link>
        <Link to="https://twitter.com/kd1k318dse"><FaTwitter onMouseEnter={showTwitterLink} onMouseLeave={hideLinks}/></Link>
        <Link to="https://instagram.com/parham________________________"><FaInstagram onMouseEnter={showInstaLink} onMouseLeave={hideLinks}/></Link>
        <Link to="mailto:prhmalzd@gmail.com"><BiLogoGmail onMouseEnter={showGmailLink} onMouseLeave={hideLinks}/></Link>
      </div>
      <div className='bio__linkAddress'>
        <p className='bio__github' style={{opacity: showGit ? 1 : 0}}>github.com/prhmalzd</p>
        <p className='bio__twitter' style={{opacity: showTwitter ? 1 : 0}}>@kd1k318dse</p>
        <p className='bio__insta' style={{opacity: showInsta ? 1 : 0}}>@parham</p>
        <p className='bio__gmail' style={{opacity: showGmail ? 1 : 0}}>prhmalzd@gmail.com</p>
      </div>
    </div>
  )
}

export default Bio