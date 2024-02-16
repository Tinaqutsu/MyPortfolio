import React from 'react'
import './Contacts.css'

function Contacts() {
  return (
    <div className='Contact-page'>
        <h2>Contact Me</h2>
        <h4>Get in touch with me:</h4> 

        <div className="contact-info">
            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                    <span>: Cape Town, South Africa</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: thinaqutsu8@gmail.com</span>
                                </p>
                            </div>
                            <div className="right-contact">
    <form action="" className="contact-form">
        <div className="input-control">
            <label htmlFor="name">FirstName:</label>
            <input type="text" id="name" required name="name" />
        </div>
        <div className="input-control">
            <label htmlFor="email">Enter Email:</label>
            <input type="email" id="email" required name="email" />
        </div>
        <div className="input-control">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" required name="subject" />
        </div>
        <div className="input-control">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" cols="15" rows="8"></textarea>
        </div>
        <div className="submit-btn">
            <button type="submit" className="main-btn">
                <span className="btn-text">Submit</span>
                <span className="btn-icon"><i className="fas fa-paper-plane"></i></span>
            </button>
        </div>
    </form>
</div>


    </div>
    </div>
  )
}

export default Contacts