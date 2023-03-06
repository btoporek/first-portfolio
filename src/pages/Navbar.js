import { NavLink } from "react-router-dom";
import logo3 from "../images/logo3.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm" id="navbar-style">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <img className="logo" src={logo3} alt="logo" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
