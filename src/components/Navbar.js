import React from 'react';

import { ReactComponent as Logo } from '../assets/images/logo.svg';

const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
                <Logo />
            </div>
            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Sign In</li>
            </ul>
        </nav>
    )
}

export default Navbar;

