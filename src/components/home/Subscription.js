import React from "react";

const Subscription = () => {
    return (
        <div className="subscription">
            <div className="container">
                <div className="early-access">
                    <h3>Get early access today</h3>
                    <p>
                        It only takes a minute to sign up and our free starter
                        tier is extremely generous. If you have any questions,
                        our support team would be happy to help you.
                    </p>
                    <form className="subscription-form">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                        />
                        <button type="submit" className="btn btn-primary">
                            Get Started For Free
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
