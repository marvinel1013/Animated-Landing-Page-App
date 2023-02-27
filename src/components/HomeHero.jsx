import React from "react";
import HeroImage from "../assets/cyber-bg.png";
import AppButton from "./AppButton";

function HomeHero() {
  return (
    <div className="min-h-screen w-full">
      <img
        src={HeroImage}
        alt="hero-image"
        className="relative z-[-1] h-screen w-full object-cover"
      />
      <div className="text-white md:mt-[-550px] mt-[-480px]">
        <div className="md:px-60 px-8 text-start">
          <h1
            className="flex flex-col text-5xl md:text-7xl font-bold"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Data <span className="text-primary">Secured</span> Protection
          </h1>
          <div data-aos="fade-up" data-aos-delay="400">
            <AppButton
              title="Learn More"
              className="md:w-[30%] p-3 mt-10 bg-blue-900 md:bg-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
