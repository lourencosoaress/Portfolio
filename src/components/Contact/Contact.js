import React from 'react'
import './Contact.css'
import {GoogleLoginButton, LinkedInLoginButton} from "react-social-login-buttons"

const Contact = () => {

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/lourencosoares/", "_blank");
  };

  const sendEmail = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=soares.lourenco23@gmail.com&su=Subject&body=Type here", "_blank");
  };

  return (

    <div className='contact-container'>
      <h6>Contact Me</h6>
      <LinkedInLoginButton onClick={openLinkedIn}>
         <span>Via LindkedIn</span>
      </LinkedInLoginButton>

      <GoogleLoginButton onClick={sendEmail}>
        <span>Send me an email</span>
      </GoogleLoginButton>
    </div>
  )
}

export default Contact;
