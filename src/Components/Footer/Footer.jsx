import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
assets;
const Footer = () => {
    return (
        <div>
            <footer class="footer-distributed">
                <div class="footer-left">
                    <img className="log" src={assets.logo} alt="" srcset="" />

                    <p class="footer-links">
                        <a href="#" class="link-1">
                            Home
                        </a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">
                        Love Home Conveyancing © 2024
                    </p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p>
                            <span>Suite 17, Minton House,</span> 2-14 Bayswater
                            Road, Potts Point 2011
                        </p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+02 9381 9118</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p>
                            <a href="mailto:support@company.com">
                                support@lovehomeconveyancing.com
                            </a>
                        </p>
                    </div>
                </div>

                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the company :</span>
                        Our general service approach is quite simple to provide
                        our clients with a world class and down-to-earth team of
                        legal professionals that know how to work together, but
                        also with the expertise and skills required to make the
                        conveyancing process a total success for all involved.
                    </p>

                    <div class="footer-icons">
                        <a href="#">
                            <i class="fa fa-facebook">
                                {" "}
                                <img src={assets.face} alt="" srcset="" />{" "}
                            </i>
                        </a>
                        <a href="#">
                            <i class="fa fa-twitter">
                                <img src={assets.x} alt="" srcset="" />
                            </i>
                        </a>
                        <a href="#">
                            <i class="fa fa-linkedin">
                                <img src={assets.linkdin} alt="" srcset="" />
                            </i>
                        </a>
                        <a href="#">
                            <i class="fa fa-insta">
                                <img src={assets.insta} alt="" srcset="" />
                            </i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
