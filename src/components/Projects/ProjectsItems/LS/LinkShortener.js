import React from 'react'
import './LinkShortener.css'

const LinkShortener = () => {
  return (
    <div className='ls-wrapper'>

        <div className='ls-container'>
            <h2 className='ls-title'>
                L
                <img className='link-img' src='./assets/images/link-icon.png' alt=''/>
                NK SH
                <img className='external-link-img' src='./assets/images/external-link-icon.png' alt=''/>
                RTENER
            </h2>

            <div className='ls-content'>
                <div className='input-container'>
                  <input placeholder='Enter URL here'/>
                </div>

                <button className='submit-button'>
                    Shorten Link
                    <img className='submit-button-img' src='./assets/images/link-icon.png' alt=''/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default LinkShortener
