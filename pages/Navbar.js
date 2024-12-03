import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
import "../css/landingpage.css";

// import { useState } from 'react';

const Navbar = () => {
  return (
    <header>
      <div className='landing-page'>
        <div className="navbar">
          <Link to="/">
            <div className="nav-logo border">
              <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
            </div>
          </Link>
          
          {/* Hamburger icon to open sidebar */}
  

          {/* Rest of Navbar content remains the same */}
          <div className="nav-address border">
            <p className="add-first">Location</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-sec">Aurangabad</p>
            </div>
          </div>

          <div className="nav-search">
            <select className="search-select">
              <option value="">All</option>
            </select>
            <input
              type="text"
              placeholder="Search Farm-Connect"
              className="search-input"
            />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <Link to="signin-signup">
            <div className="nav-signin border">
              <p><span>Hello, sign in</span></p>
              <p className="nav-second">Accounts</p>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Add the Slidebar component here */}
   
    </header>
  );
};

export default Navbar;
