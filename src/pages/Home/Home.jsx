import React from "react";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import NatureActivities from "./NatureActivities";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-32">
        <Banner></Banner>
      </div>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <NatureActivities></NatureActivities>
    </div>
  );
};

export default Home;
