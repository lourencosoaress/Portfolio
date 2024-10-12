import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import DarkMode from '../DarkMode/DarkMode';
import MobileNavbar from './Mobile/MobileNavbar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Contact from '../Contact/Contact';

import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [hasOpen, setHasOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

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
            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
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
                                        maxWidth: '30%',
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
                        <DarkMode />
                    </div>

                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;