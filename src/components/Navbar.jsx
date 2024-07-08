import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
// import './navbar.css';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <nav
            className="fixed z-1000  mt-0 w-full  
            backdrop-filter backdrop-blur-lg bg-opacity-30 px-8 py-3 font-montserrat bg-slate-400"
        >
            {/* <img src=""></img> */}
            {/* <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About Me</NavLink>
                <NavLink to="/Skills">Skills</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Contact">Contact</NavLink> */}
            <div className="max-lg:hidden flex justify-around">
                <a href="#home">Home</a>
                <a href="#about">About Me</a>
                {/* <a href="#skills">Skills</a> */}
                <a href="#stack">Tech Stack</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <img
                className="hidden max-lg:block"
                src={isMenuOpen?"/icons/cross.svg":"/icons/hamburger.svg"}
                width={25}
                height={25}
                onClick={toggleMenu}
            ></img>
            {/* Mobile Menu */}
            <div className={` ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center justify-center h-full">
                    <a href="#home" className="py-2" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="py-2" onClick={toggleMenu}>About Me</a>
                    <a href="#stack" className="py-2" onClick={toggleMenu}>Tech Stack</a>
                    <a href="#projects" className="py-2" onClick={toggleMenu}>Projects</a>
                    <a href="#contact" className="py-2" onClick={toggleMenu}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
