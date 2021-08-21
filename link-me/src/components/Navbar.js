import React from 'react'
import '../components/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <div>
          <nav>

          <ul>
            <Link to="/" className="links">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/Features"className="links">
              <li>
                <a>Features</a>
              </li>
            </Link>

            <Link to="/Contact" className="links">
              <li>
                <a>Contact</a>
              </li>
            </Link>
            <Link to="/sign-up" className="no-hover">
               <li style={{float:'right', padding: 10}}><a className="active" href="#about">Sign Up</a></li>
            </Link>
              <li style={{float:'right', padding: 10}}><a className="active" href="#about">Login</a></li>
          </ul>



          </nav>

      </div>
    )
}

export default Navbar
