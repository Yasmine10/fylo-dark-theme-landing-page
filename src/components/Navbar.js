import React from 'react';

import Logo from "../assets/images/logo.svg";

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="logo-container">
                <img src={Logo} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">Features</li>
                <li className="nav-item">Team</li>
                <li className="nav-item">Sign In</li>
            </ul>
        </nav>
    )
}

export default Navbar;

