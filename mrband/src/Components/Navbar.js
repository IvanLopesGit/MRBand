import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={require("../Images/logo.png")} alt="Mario Rossi Band" />
          </Link>
          <img
            className="logomin"
            src={require("../Images/logomenor.png")}
            alt="Mario Rossi Band"
          />

          <img
            className="subtitle"
            src={require("../Images/old_street.png")}
            alt="The Same Old Street"
          />

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars fa-lg"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/music" className="nav-links" onClick={closeMobileMenu}>
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/members"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Members
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/media" className="nav-links" onClick={closeMobileMenu}>
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
