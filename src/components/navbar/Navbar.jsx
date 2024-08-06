import React from 'react'
import './navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
        <span>sohadadmin</span>
      </div>
      <div className="icons">
        <img src="/images/search.svg" alt="" className="icon" />
        <img src="/images/app.svg" alt="" className="icon" />
        <img src="/images/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/images/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="/images/sohad.jpg"
            alt=""
          />
          <span>Sohad</span>
        </div>
        <img src="/images/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar