import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <div className="notFound">
      <span>404</span>
      <p>Page Not found!</p>
      <Link  to='/'><button>Back to Home</button></Link>
    </div>
  )
}

export default NotFound