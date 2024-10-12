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
        <img src="./assets/images/Lourenço Soares.png" alt=''/>
    </div>
    <div className='tech-icon-conteiner'>
    <div className='tech-icon' data-text="Java">
<img src='./assets/images/java-logo.png' alt='Java'/>
</div>
<div className='tech-icon' data-text="HTML">
<img src='./assets/images/html-logo.png' alt='HTML'/>
</div>
<div className='tech-icon' data-text="CSS">
<img src='./assets/images/css-logo.png' alt='CSS'/>
</div>
<div className='tech-icon' data-text="React">
<img src='./assets/images/react-logo.png' alt='React'/>
</div>
<div className='tech-icon' data-text="JavaScript">
<img src='./assets/images/js-logo.png' alt='JavaScript'/>
</div>
<div className='tech-icon' data-text="Git">
<img src='./assets/images/git-logo.png' alt='Git'/>
</div>
<div className='tech-icon' data-text="SQL">
<img src='./assets/images/sql-logo.png' alt='SQL'/>
</div>
    </div>
  </div>
</section>
  )
}

export default Hero;