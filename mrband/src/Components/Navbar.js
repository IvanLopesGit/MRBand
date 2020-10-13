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
          <Link to="/" onClick={closeMobileMenu}>
            <img
              className="logomin"
              src={require("../Images/logomenor.png")}
              alt="Mario Rossi Band"
            />
          </Link>

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
                to="/theband"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                The Band
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/media" className="nav-links" onClick={closeMobileMenu}>
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contacts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
