import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as LocationIcon } from '../assets/images/icon-location.svg';
import { ReactComponent as PhoneIcon } from '../assets/images/icon-phone.svg';
import { ReactComponent as MailIcon } from '../assets/images/icon-email.svg';

const Footer = () => {
    return (
        <div>
            <div className="logo-container">
                <Logo />
            </div>
            <div className="footer-content">
                <div className="location">
                    <LocationIcon />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                </div>
                <div className="contact-info">
                    <div>
                        <PhoneIcon />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div>
                        <MailIcon />
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="extra-info">
                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="social-links">
                    <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
