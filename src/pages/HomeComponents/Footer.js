import { Link } from 'react-router-dom'
import './footer.css'

const Footer = ({anotherPage, aboutme, portfolio}) => {
  return (
    <div className="footer">

      <div className="footer__upper">

        <div className="footer__upper__contactMe">
          <h3 className="footer__upper__contactMe__head">Contact me</h3>
          <p>Email: <Link to="mailto:prhmalzd@gmail.com"><span>prhmalzd@gmail.com</span></Link></p>
          <p>Discodrd: <span>WATASHIWA SHIKADESU#8356</span></p>
          <p>Twitter: <Link to="https://twitter.com/kd1k318dse"><span>@kd1k318dse</span></Link></p>
        </div>

        {!anotherPage && <div className="footer__upper__siteMap">
          <h3 className="footer__upper__siteMap__head">Site map</h3>
          <p onClick={aboutme}>About me</p>
          <p onClick={portfolio}>Portfolio</p>
        </div>}

        {anotherPage && <div className="footer__upper__siteMap">
          <h3 className="footer__upper__siteMap__head">Site map</h3>
          <p><Link to='/'>Home</Link></p>
        </div>}

      </div>

      <div className="footer__downer">

        <p className="footer__downer__left">&#169; 2020-2023 Parham Alizadeh</p>

        <p className="footer__downer__right"><Link to="https://github.com/prhmalzd/Resume">Website Source Code</Link></p>

      </div>

    </div>
  )
}

export default Footer