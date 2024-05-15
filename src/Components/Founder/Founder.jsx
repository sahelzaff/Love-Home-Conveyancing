import React from "react";
import "./Founder.css";
import { assets } from "../../assets/assets";

const Founder = () => {
    return (
        <div className="color">
            <div className="container_about">
                <div className="container2 ">
                    <div className="photo_container">
                        <div className="photo" data-aos="fade-right">
                            <img src={assets.Standing} alt="" srcset="" />
                            <div className="name">
                                <div className="about_name">
                                    Mr Robin Cater
                                    <span className="name_p">
                                        Principal Solicitor at Love Homes
                                        Conveyancing
                                    </span>
                                </div>
                            </div>
                            <div className="shape">
                                <div className="text">
                                    <h3>25</h3>
                                    <span>Years Of Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text2">
                        <div className="about_content">
                            <span>On Your Side</span>
                            <h3>
                                Legal Pitfalls to Avoid When Purchasing
                                Property: Expert Advice for Peace of Mind
                            </h3>
                            <p>
                                Leave the hassle to me, and focus on what really
                                matters to you. so you can chat directly with
                                the qualified property lawyer.
                            </p>
                            <div className="btn">
                                <button className="default_dtn">Let's Chat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;

