
import './Navbar.css';
import React, { useState } from 'react';
import ieee_logo from '../../assets/layout/ieee_logo_white.png'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar1">
          <a href="/" className="nav-branding">
            <img className="ieee_logo_white" src={ieee_logo} alt="" />
            <p className="ieee_vesit-nav">IEEE-VESIT</p>
          </a>
          <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
            <ul className="menu cf navbar">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Facilities</a>
                <ul className="submenu">
                  <li>
                    <a href="/events">Events</a>
                  </li>
                  <li>
                    <a href="/workshops">Workshops</a>
                  </li>
                  <li>
                    <a href="/magazines">Magazines</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/council">Council</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/developers">Developers</a>
              </li>
            </ul>
          </ul>
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
