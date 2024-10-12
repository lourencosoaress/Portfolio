import React, { useState, useEffect } from 'react'
import './MobileNavbar.css'
import { Link } from 'react-scroll'
import { Modal } from 'react-responsive-modal'
import Contact from '../../Contact/Contact';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const MobileNavbar = ({ isOpen, toggleMenu }) => {

    const [hasOpen, setHasOpen] = useState(false);
    const location = useLocation();

    const onButtonClick = () => {
        setHasOpen(true);
    };

    const onCloseModal = () => {
        setHasOpen(false);
    };

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

  return (
    <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <img className='logo' src='./images/logo.svg' alt="" />

                    <ul>
                    <li>
                            <RouterLink to="/#home" className='menu-item'>Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/#work-experience" className='menu-item'>Work Experience</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/#projects" className='menu-item'>Projects</RouterLink>
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
              </div>
            </div>
        </>
    )
}

export default MobileNavbar
