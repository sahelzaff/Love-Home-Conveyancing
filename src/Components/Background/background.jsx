import React from "react";
import "./background.css";
import { assets } from "../../assets/assets";

const background = () => {
  return (
    <>
      <div className="background" data-aos="fade-left" >
        <img src={assets.banner_1} alt="" srcset="" />
      </div>

      <div className="container">
        <div className="color"></div>
      </div>
    </>
  );
};

export default background;
