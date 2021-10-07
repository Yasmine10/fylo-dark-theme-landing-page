import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../assets/images/logo.svg";
import { ReactComponent as LocationIcon } from "../assets/images/icon-location.svg";
import { ReactComponent as PhoneIcon } from "../assets/images/icon-phone.svg";
import { ReactComponent as MailIcon } from "../assets/images/icon-email.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="early-access">
                    <h2>Get early access today</h2>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.</p>
                    <form>
                        <input type="email" id="email" name="email" placeholder="email@example.com"/>
                        <button type="submit" className="btn btn-primary">Get Started For Free</button>
                    </form>
                </div>
                <div className="logo-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-content">
                    <div className="company-info">
                        <div className="location">
                            <LocationIcon className="icon" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="contact-info">
                            <div>
                                <PhoneIcon className="icon" />
                                <p>+1-543-123-4567</p>
                            </div>
                            <div>
                                <MailIcon className="icon" />
                                <p>example@fylo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-nav">
                        <ul className="">
                            <li>About Us</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="extra-info">
                        <ul className="">
                            <li>Contact Us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <a href="#" className="icon">
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                        </a>
                        <a href="#" className="icon">
                            <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </a>
                        <a href="#" className="icon">
                            <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
