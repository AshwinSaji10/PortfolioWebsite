import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
function Navbar()
{
    return(
        <nav className='Navbar'>
            <NavLink to='/' className="Navbar-item">Home</NavLink>
            <NavLink to='/About' className="Navbar-item">About</NavLink>
            <NavLink to='/Experience' className="Navbar-item">Experience</NavLink>
            <NavLink to='/Projects' className="Navbar-item">Projects</NavLink>
            <NavLink to='/Contact' className="Navbar-item">Contact</NavLink>
        </nav>
    );
};

export default Navbar;

