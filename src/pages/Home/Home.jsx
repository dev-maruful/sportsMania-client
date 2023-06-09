import React from "react";
import Slider from "./Slider";
import PopularClasses from "./PopularClasses";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Slider></Slider>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
