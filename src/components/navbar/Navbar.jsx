import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        {/* Navbar HTML code */}
        <nav className="navbar1">
          <a href="/" className="nav-branding">
            <img className="ieee_logo_white" src="/images/layout/ieee_logo_white.png" alt="" />
            <p className="ieee_vesit-nav">IEEE-VESIT</p>
          </a>
          <ul className="nav-menu">
            <ul className="menu cf navbar">
              <li><a href="/">Home</a></li>
              <li>
                <a href="#">Facilities</a>
                <ul className="submenu">
                  <li><a href="/events">Events</a></li>
                  <li><a href="/workshops">Workshops</a></li>
                  <li><a href="/magazines">Magazines</a></li>
                </ul>
              </li>
              <li><a href="/council">Council</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
