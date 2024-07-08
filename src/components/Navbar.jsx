import React from "react";
import { NavLink } from "react-router-dom";
// import './navbar.css';
const Navbar = () => {
    return (
        <nav
            className="fixed z-1000 flex justify-around mt-0 w-full  
            backdrop-filter backdrop-blur-lg bg-opacity-30 px-8 py-3 font-montserrat bg-slate-400"
        >
            <img src=""></img>
            {/* <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About Me</NavLink>
                <NavLink to="/Skills">Skills</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Contact">Contact</NavLink> */}
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            {/* <a href="#skills">Skills</a> */}
            <a href="#stack">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    );
};

export default Navbar;
