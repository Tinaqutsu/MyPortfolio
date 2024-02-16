import React, { useState } from 'react';
import './Navbar.css';
import myImage from './image/logo.svg';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='Nav-container'>
      <img src={myImage} alt="Description of the image" />
      <button className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <ul id="navbar" className={showMenu ? "show" : ""}>
        <li><a className='active' href='#'>Home</a></li>
        <li><a href='#'>About Me</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Skills</a></li>
        <div className="contact-button">
          <button>Contact me</button>
        </div>
      </ul>
    </div>
  );
}
