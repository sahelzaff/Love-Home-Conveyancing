import React from "react";
// import { useState } from 'react'
import "./App.css"
import Navbar from "./Components/Navbar/navbar";
import Background from "./Components/Background/background";
import Center from "./Components/main/center";
import Help from "./Components/help/help";
import Review from "./Components/Review/review";
import reviewData from "./Components/Review/reviewData.js";
import FAQs from "./Components/FAQs/FAQs.jsx";
import Counter from "./Components/Counter/Counter.jsx";
import Founder from "./Components/Founder/Founder.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import HeroContent_2 from "./Components/HeroContent_2/HeroContent_2.jsx";
import Booknow from "./Components/Booknow/Booknow.jsx";
const App = () => {
  const review = [{ reviewData }];
  return (
    <div>
      <div className="first-2">
        <Navbar />
        <Background />
        <Center />
      </div>
      <div className="back">
        <HeroContent_2 />
        <Founder />
        <Help />
        <Booknow />
        <Review reviews={reviewData} />
        <Counter />
        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
