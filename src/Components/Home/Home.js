import React from 'react';
import Profile from './images/profile.png';
import background from './images/Background.png';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-content'>
       
          <div className="image-container">
            <div className='backImg'>
            <img src={background} alt="Description of the image"/>
            </div>
            <div className="text-overlay">
              <h1> Hi,</h1>
              <h3>
                I'm Thina <span className='name'>Qutsu</span> 
              </h3>
              <p>
                a Front-end Developer <br />
                I specialize in creating responsive websites and 
                applications using various languages.
              </p>
            </div>
            <div className='button-container'>
                <div className="button">
                  <button>Download cv</button>
                </div> 

                <div className='icons'>
                <i className="fa-brands fa-github"></i>
                <i className="fa-solid fa-envelope"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              </div>

          </div>
          <div className='imag'>
          <img src={Profile} alt="Description of the image" />
          </div>
        </div>
        
      </div>
      <div className='Line'></div>
    </div>
  );
}
