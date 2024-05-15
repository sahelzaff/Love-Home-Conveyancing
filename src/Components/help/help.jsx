import React from "react";
import "./help.css";
import { assets } from "../../assets/assets";

const help = () => {
    return (
        <div className="color">
            <div className="main-container">
                {/* <div className="main-heading">
                    <h2>Experience The Benefits Simplified With Our Service</h2>
                    <p>
                        At love home, we redefine conveyancing by prioritizing
                        simplicity and convenience.
                    </p>
                </div> */}
                {/* <div className="grid-container" >
                    <div className="grid" data-aos="slide-right">
                        <h5 className="grid-head">
                            Seamless Digital Experience
                        </h5>
                        <p className="grid-para">
                            Experience the ease of digital convenience with
                            transparent, 24/7 access to documents, updates, and
                            messages. Whether you're at home or on the move, all
                            content is seamlessly delivered to any mobile
                            device, keeping you informed every step of the way.
                        </p>
                    </div>
                    <div className="grid" data-aos="fade">
                        <h5 className="grid-head">Stress-Free Communication</h5>
                        <p className="grid-para" >
                            Say goodbye to stress with our streamlined
                            communication process. All correspondence is
                            securely delivered to you, your agent, and your
                            broker in one online space hosted by your dedicated
                            solicitor. This means you can communicate directly
                            with your qualified property lawyer, ensuring
                            clarity and efficiency throughout the transaction
                        </p>
                    </div>
                    <div className="grid" data-aos="slide-left">
                        <h5 className="grid-head">Trusted and Proven</h5>
                        <p className="grid-para">
                            At the core of our service is trust and reliability.
                            We prioritize our customers and handle property
                            deals with ease, speed, and confidence, ensuring a
                            smooth and successful experience every time.
                            Discover the difference with love home, where
                            conveyancing is made simple.
                        </p>
                    </div>
                </div> */}
                <div className="main-heading-help">
                    <h2>How can we help?</h2>
                    <p>
                        Let us help you with a free conveyancing quote.
                        <br /> We just need a few details to begin.
                    </p>
                </div>

                <div className="grid-container-house">
                    <div className="grid-1" data-aos="zoom-in">
                        <img
                            src={assets.buying}
                            alt=""
                            className="grid-asset"
                        />
                        <p className="grid-para2">Buying a property</p>
                    </div>
                    <div className="grid-1" data-aos="zoom-in">
                        <img
                            src={assets.selling}
                            alt=""
                            className="grid-asset"
                        />
                        <p className="grid-para2">Selling a property</p>
                    </div>
                    <div className="grid-1" data-aos="zoom-in">
                        <img
                            src={assets.transfer}
                            alt=""
                            className="grid-asset"
                        />
                        <p className="grid-para2">Transfer a property</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default help;
