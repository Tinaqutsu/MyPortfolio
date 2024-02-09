import React from 'react'
import './Navbar.css';
import myImage from './image/logo.svg';

export default function Navbar() {
  return (
    <div className='Nav-container'>
            
       <ul id="navbar">
       
             <img src={myImage} alt="Description of the image" />
             
              <li><a className='active' href='#'>Home</a></li>
              <li><a href='#'>About Me</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>Skills</a></li>
              <div className="contact-button">
                <button>Contact me</button>
                
              </div>
          </ul>
        
    </div>
  )
}
