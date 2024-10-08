import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id='home' className='hero-container'>
      <div className='hero-content'>
        <h2>Lourenço Soares</h2>
        <a href="/assets/files/Lourenco-Resume.pdf" className="download-btn" download="Lourenco-Resume.pdf">
          <button className="custom-btn">
            <img src="./assets/images/download-button.png" alt="Download Resume" className="icon" />
            Download Resume
          </button>
        </a>

      </div>

      <div className='hero-img'>
        <div className='profile-img'>
            <img src="./assets/images/Lourenço Soares.png"/>
        </div>

        <div className='tech-icon-conteiner'>
            <div className='tech-icon'>
                <img src='./assets/images/java-logo.png'/>
            </div>
            <div className='tech-icon'>
                <img src='./assets/images/html-logo.png'/>
            </div>
            <div className='tech-icon'>
                <img src='./assets/images/css-logo.png'/>
            </div>
            <div className='tech-icon'>
                <img src='./assets/images/react-logo.png'/>
            </div>
            <div className='tech-icon'>
                <img src='./assets/images/js-logo.png'/>
            </div>
            <div className='tech-icon'>
                <img src='./assets/images/git-logo.png'/>
            </div>
            <div className='tech-icon'>
                <img src='./assets/images/sql-logo.png'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;