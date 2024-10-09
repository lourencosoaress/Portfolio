import React, { useState } from 'react'
import "./Navbar.css"
import DarkMode from '../DarkMode/DarkMode'
import MobileNavbar from './Mobile/MobileNavbar'
import {Link} from "react-scroll";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal'
import Contact from '../Contact/Contact';

import WorkExperience from '../WorkExperience/WorkExperience';
import Projects from '../Projects/Projects';
import Hero from '../Hero/Hero';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [hasOpen, setHasOpen] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const onButtonClick = () => {
        setHasOpen(true);
    };

    const onCloseModal = () => {
        setHasOpen(false);
    };

  return (
    <>
    <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />

    
     <nav className='nav-wrapper'>
        <div className='nav-content'>

            <ul>
                <li>
                    <Link to='home' spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <a className='menu-item'>Home</a> 
                    </Link>
                </li>
                <li>
                    <Link to='work-experience' spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}>
                    <a className='menu-item'>Work Experience</a>
                    </Link>
                </li>
                <li>
                    <Link to='projects' spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>
                    <a className='menu-item'>Projects</a>
                    </Link>
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

            <button class='menu-btn' onClick={toggleMenu}>
                <span
                class={"material-symbols-outlined"}
                style={{ fontSize: "1.8rem" }}
                >
                   {openMenu ? "close" : "menu"}
                </span>
            </button>
        </div>
    </nav>
                    
    </>
  )
}

export default Navbar
