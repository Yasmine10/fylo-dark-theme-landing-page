import React from "react";

import introImg from "../assets/images/illustration-intro.png";

import feature1Img from "../assets/images/icon-access-anywhere.svg";
import feature2Img from "../assets/images/icon-security.svg";
import feature3Img from "../assets/images/icon-collaboration.svg";
import feature4Img from "../assets/images/icon-any-file.svg";

import stayProductiveImg from "../assets/images/illustration-stay-productive.png";
import { ReactComponent as ArrowIcon } from "../assets/images/icon-arrow.svg";

import Testimonials from "../components/home/Testimonials";

const Home = () => {
    return (
        <div className="home">
            <div className="intro-wrapper">
                <div className="intro container">
                    <img
                        src={introImg}
                        alt="Illustration about storing files in one location"
                    />
                    <h1>
                            All your files in one secure location, accessible
                            anywhere.
                    </h1>
                    <p>
                        Fylo stores all your most important files in one secure
                        location. Access them wherever you need, share and
                        collaborate with friends family, and co-workers.
                    </p>
                    <a href="#" className="btn btn-primary btn-intro">
                        Get Started
                    </a>
                </div>
            </div>
            <div className="features-wrapper">
                <div className="features container">
                    <div>
                        <div className="img-container">
                            <img src={feature1Img} alt="" />
                        </div>
                        <h4>Access your files, anywhere</h4>
                        <p>
                            The ability to use a smartphone, tablet, or computer
                            to access your account means your files follow you
                            everywhere.
                        </p>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src={feature2Img} alt="" />
                        </div>
                        <h4>Security you can trust</h4>
                        <p>
                            2-factor authentication and user-controlled
                            encryption are just a couple of the security
                            features we allow to help secure your files.
                        </p>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src={feature3Img} alt="" />
                        </div>
                        <h4>Real-time collaboration</h4>
                        <p>
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachments required.
                        </p>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src={feature4Img} alt="" />
                        </div>
                        <h4>Store any type of file</h4>
                        <p>
                            Whether you're sharing holidays photos or work
                            documents, Fylo has you covered allowing for all
                            file types to be securely stored and shared.
                        </p>
                    </div>
                </div>
            </div>
            <div className="stay-productive-wrapper">
                <div className="stay-productive container">
                    <div className="img-container">
                        <img src={stayProductiveImg} alt="" />
                    </div>
                    <div className="stay-productive-content">
                        <h2>Stay productive, wherever you are</h2>
                        <p>
                            Never let location be an issue when accessing your
                            files. Fylo has you covered for all of your file
                            storage needs.
                        </p>
                        <p>
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachments required.
                        </p>
                        <a href="#" className="link">
                            <span>See how Fylo works</span>
                            <ArrowIcon className="arrow-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <Testimonials />
        </div>
    );
};

export default Home;
