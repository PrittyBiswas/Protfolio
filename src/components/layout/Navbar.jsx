import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <ul className="navbar-list">

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            <NavLink to="/" end>About</NavLink>
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            <NavLink to="/resume">Resume</NavLink>
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            <NavLink to="/protfolio">Projects</NavLink>
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            <NavLink to="/contact">Contact</NavLink>
          </button>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar
