import React from "react";

import quotes from "../../assets/images/bg-quotes.png";
import profile1 from "../../assets/images/profile-1.jpg";
import profile2 from "../../assets/images/profile-2.jpg";
import profile3 from "../../assets/images/profile-3.jpg";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="container">
                <div className="quotes-img">
                    <img src={quotes} alt="" />
                </div>
                <blockquote>
                    <p>
                        Fylo has improved our team productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaboration machine.
                    </p>
                    <div className="client-info">
                            <img src={profile1} alt="" />
                            <h6>Satish Patel</h6>
                            <small>Founder &amp; CEO, Huddle</small>
                    </div>
                </blockquote>
                <blockquote>
                    <p>
                        Fylo has improved our team productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaboration machine.
                    </p>
                    <div className="client-info">
                            <img src={profile2} alt="" />
                            <h6>Bruce McKenzie</h6>
                            <small>Founder &amp; CEO, Huddle</small>
                    </div>
                </blockquote>
                <blockquote>
                    <p>
                        Fylo has improved our team productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaboration machine.
                    </p>
                    <div className="client-info">
                            <img src={profile3} alt="" />
                            <h6>Iva Boyd</h6>
                            <small>Founder &amp; CEO, Huddle</small>
                    </div>
                </blockquote>
            </div>
        </div>
    );
};

export default Testimonials;
