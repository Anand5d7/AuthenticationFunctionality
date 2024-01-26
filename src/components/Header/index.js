// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="list-container">
      <Link to="/" className="list-item">
        <li className="list">Home</li>
      </Link>
      <Link to="/about" className="list-item">
        <li className="list">About</li>
      </Link>
    </ul>
  </div>
)

export default Header
