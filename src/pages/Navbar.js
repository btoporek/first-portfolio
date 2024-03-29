import { NavLink } from "react-router-dom";
import logo3 from "../assets/logo3.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand" id="navbar-style">
      <ul className="navbar-nav" id="navbar-items">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className="nav-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="projects" className="nav-item">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className="nav-item">
            Contact
          </NavLink>
        </li>
      </ul>
      <span className="navbar-text">
        <NavLink to="/" className="nav-item">
          <img className="logo" src={logo3} alt="logo" />
        </NavLink>
      </span>
    </nav>
  );
}

export default Navbar;
