import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const gotoaccount = () => {
    navigate("/account")
  }
  return (
    <div className="header">
      {/* Left side - Sidebar button and YouTube logo with text */}
      <div className="header__left">
        {/* Sidebar button */}
        <button className="header__sidebarButton">≡</button>

        {/* YouTube logo and text */}
        <div className="header__logoContainer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube Logo"
            className="header__logo"
          />
          <h1 className="header__logoText">YouTube</h1> {/* Text next to the logo */}
        </div>
      </div>

      {/* Center - Search bar with icon */}
      <div className="header__center">
        <input
          type="text"
          placeholder="Search"
          className="header__searchInput"
        />
        <div className="header__searchIcon">🔍</div> {/* Search icon */}
      </div>

      {/* Right side - Placeholder for icons and additional icon */}
      <div className="header__right">
        <div className="header__icon header__notification">🔔</div> {/* Notification placeholder */}
        <div className="header__icon header__profile"><button onClick={gotoaccount}>👤</button></div> {/* Profile placeholder */}
        <div className="header__icon header__settings">⚙️</div> {/* Additional icon (Settings) */}
      </div>
    </div>
  );
};

export default Header;
