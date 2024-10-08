import React, { useState } from 'react'
import './MobileNavbar.css'
import { Link } from 'react-scroll'
import { Modal } from 'react-responsive-modal'
import Contact from '../../Contact/Contact';
import DarkMode from '../../DarkMode/DarkMode';

const MobileNavbar = ({ isOpen, toggleMenu }) => {

    const [hasOpen, setHasOpen] = useState(false);

    const onButtonClick = () => {
        setHasOpen(true);
    };

    const onCloseModal = () => {
        setHasOpen(false);
    };

  return (
    <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <img className='logo' src='./images/logo.svg' alt="" />

                    <ul>
                        <li>
                        <Link to='home' spy={true}
                                                  smooth={true}
                                                  offset={0}
                                                  duration={500}>
                            <a className='menu-item'>Home</a> </Link>
                        </li>
                        <li> 
                        <Link to='work-experience' spy={true}
                                                  smooth={true}
                                                  offset={-50}
                                                  duration={500}>
                            <a className='menu-item'>Work Experience</a> </Link>
                        </li>
                        <li>
                        <Link to='projects' spy={true}
                                                  smooth={true}
                                                  offset={-50}
                                                  duration={500}>
                            <a className='menu-item'>Projects</a></Link>
                        </li>
                        <li>
                            <a className='menu-item' onClick={onButtonClick}>
                                Contact Me
                            </a>
                            <Modal 
                            open={hasOpen} 
                            onClose={onCloseModal} 
                            center 
                            styles={{
                            modal: {
                            background: '#130f2a',
                            borderRadius: '0.65rem',
                            border: '1.5px solid #6751b9',
                            padding: '1rem 0.8rem 1.4rem',
                            margin: '0 1rem',
                            maxWidth: '100%',
                              },
                              closeButton: { 
                                top: '17px',
                                background: '#e0e0e0',
                              }
                             }}
                            >
                               <Contact />
                            </Modal>
                        </li>
                    </ul>
                    <div className='dark-mode-container'>
                       <DarkMode/>
                    </div>
              </div>
            </div>
        </>
    )
}

export default MobileNavbar
