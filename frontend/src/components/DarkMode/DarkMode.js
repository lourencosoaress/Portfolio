import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "../Sun.svg";
import { ReactComponent as Moon } from "../Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {

    const [theme, setTheme] = useState(localStorage.getItem("selectedTheme") || "light");
    
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
        setTheme("dark");
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light");
        setTheme("light");
    }

    useEffect(() => {
        if (theme === "dark") setDarkMode();
        else setLightMode();
      }, [theme]);

    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
        else setLightMode()
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                checked={theme === "dark"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;