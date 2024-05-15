import React from "react";
import "./HeroContent_2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from "../../assets/assets";

const HeroContent_2 = () => {
    return (
        <section className="ttm-row broken-section padding_bottom_zero-section bg-layer-equal-height ttm-bgcolor-third-dark-grey-color clearfix">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-5 col-md-12 pb-90">
                        <div className="ttm-bg ttm-col-bgimage-yes col-bg-img-two ttm-left-span">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" data-aos="fade-right"> <img className="img_2" src={assets.bg1_final} alt="" srcset="" /> </div>
                        </div>
                        <img
                            class="img-fluid ttm-equal-height-image w-100"
                            src={assets.bg1_final}
                            alt="bg-image"
                        />
                    </div>

                    <div className="col-lg-7 col-md-12 pb-200">
                        <div className="ttm-col-bgimage-yes col-bg-img-three ttm-bg ttm-right-span spacing-2">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-base-dark ">
                                <div className="ttm-col-wrapper-bg-layer-inner" > <img src={assets.bg2_final} alt="" srcset="" /> </div>
                            </div>
                            <div className="layer-content">
                                <div className="section-title">
                                    <div className="title-header">
                                        <h3>Get To Know Us</h3>
                                        <h2 className="title">
                                            Legal Pitfalls to Avoid When
                                            Purchasing Property:
                                        </h2>
                                    </div>
                                </div>
                                <div className="row ttm-bgcolor-third-dark-grey-color res-1199-mr-15 pt-30 mr-0 mt-40 pr-15 pb-10 pl-10 ml-0 backup">
                                    <div className="col-sm-4">
                                        <div className="digit-box">
                                            <h3>25</h3>
                                            <p>Years Of Success</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="ttm-border-left pt-10 pl-30">
                                            <div className="single-text-box">
                                                <h3>
                                                    <strong>#1 </strong>
                                                    Property Conveyancer
                                                </h3>
                                                {/* <p>
                                                    2022 The National Best Law
                                                    Service Award
                                                </p> */}
                                            </div>
                                            <div className="featured-icon-star pt-20">
                                                <h3 className="pl-2">
                                                    <i className="fa fa-star"></i>
                                                    4.8/5 for the
                                                    <span className="ttm-textcolor-skincolor pl-2 color-text">
                                                        Conveyancing
                                                    </span>
                                                    <span className="pl-2">
                                                        Services{" "}
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ttm-vertical_sep mt-40 res-575-mt-20">
                                    <div className="col-lg-6 col-md-6 col-sm-6 res-575-margin_bottom20">
                                        <div className="featured-icon-box icon-align-before-title style9">
                                            <div className="featured-title">
                                                <h3>Our History</h3>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-desc">
                                                    <p>
                                                        Australia's property
                                                        conveyancing practices
                                                        trace back to the
                                                        establishment of formal
                                                        land title systems
                                                        during the colonial
                                                        era.s
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="featured-icon-box icon-align-before-title style9">
                                            <div className="featured-title">
                                                <h3>Our Mission</h3>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-desc">
                                                    <p>
                                                        Offering seamless
                                                        access to top-tier legal
                                                        assistance, ensuring
                                                        your property
                                                        transactions are smooth
                                                        and stress-free
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroContent_2;
