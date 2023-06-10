import React from "react";
import Slider from "./Slider";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import NatureActivities from "./NatureActivities";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <NatureActivities></NatureActivities>
    </div>
  );
};

export default Home;
