import React from "react";
import HeroImage from "../assets/data-bg.png";
import AppButton from "./AppButton";

function HomeRecovery() {
  return (
    <div className="min-h-screen w-full">
      <img
        src={HeroImage}
        alt="hero-image"
        className="relative z-[-1] h-screen w-full object-cover"
      />
      <div className="text-white md:mt-[-500px] mt-[-480px]">
        <div className="md:ml-[60%] text-center md:text-start p-2">
          <h1
            className="text-5xl font-bold"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <span className="text-primary">Data</span>{" "}
            <span className="text-blue-900">Recovery</span>
          </h1>
          <p
            className="md:w-[80%] text-lg text-secondary mt-5 md:p-0 p-2"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto
            blanditiis fugit, alias amet ex ducimus reprehenderit quis et est!
            Natus rem rerum quod distinctio corporis ipsum tempore inventore.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <AppButton
              title="Sign Up"
              className="md:w-[20%] w-[50%] p-3 mt-10 bg-blue-900 md:bg-primary hover:text-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRecovery;
