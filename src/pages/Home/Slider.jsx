import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel className="text-center mb-32">
      <div className="relative">
        <div className="absolute top-0 left-0 text-white w-full h-full flex flex-col justify-center items-start pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
          <h3 className="text-8xl font-bold mb-10">We Play Together!</h3>
          <p className="w-1/2 text-start text-lg mb-10">
            Experience the thrill of summer sports as we come together, united
            by our passion for athletics. Join us for an action-packed season of
            teamwork, skill-building, and unforgettable memories!
          </p>
          <button className="btn btn-outline btn-accent">Enroll Now!</button>
        </div>
        <img
          className="rounded-2xl"
          src="https://img.freepik.com/free-photo/side-view-kids-sportswear-holding-each-other_23-2148631549.jpg?size=626&ext=jpg"
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 text-white w-full h-full flex flex-col justify-center items-start pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
          <h3 className="text-8xl font-bold mb-10">We Enjoy Together!</h3>
          <p className="w-1/2 text-start text-lg mb-10">
            Dive into a world of sports, where friendships are forged, skills
            are honed, and memories are made. Join us this summer and be a part
            of an incredible journey filled with teamwork, fun, and athletic
            achievements!
          </p>
          <button className="btn btn-outline btn-accent">Enroll Now!</button>
        </div>
        <img
          className="rounded-2xl"
          src="https://img.freepik.com/free-photo/smiley-kids-putting-their-hands-each-other_23-2148631591.jpg?size=626&ext=jpg"
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 text-white w-full h-full flex flex-col justify-center items-start pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
          <h3 className="text-8xl font-bold mb-10">We Win Together!</h3>
          <p className="w-1/2 text-start text-lg mb-10">
            Discover the joy of sports camaraderie and embrace the spirit of
            summer as we unite in a dynamic playground of athletic adventures.
            Unleash your potential, forge lasting bonds, and create
            unforgettable moments in our action-packed summer vacation school!
          </p>
          <button className="btn btn-outline btn-accent">Enroll Now!</button>
        </div>
        <img
          className="rounded-2xl"
          src="https://img.freepik.com/free-photo/winning-football-team-taking-selfie_23-2148631596.jpg?size=626&ext=jpg"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
