import React from "react";
import AppButton from "../components/AppButton";
import Image from "../assets/recovery-bg.png";

function Recovery() {
  return (
    <div className="min-h-screen w-full">
      <img
        src={Image}
        alt="hero-image"
        className="relative z-[-1] h-screen w-full object-cover"
      />
      <div className="text-white md:mt-[-550px] mt-[-480px]">
        <div className="md:px-40 px-8 text-start">
          <h1
            className="text-5xl font-bold"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <span className="text-primary">Data</span>{" "}
            <span className="text-white">Recovery</span>
          </h1>
          <p
            className="md:w-[40%] text-lg text-white mt-5 md:p-0 p-2"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto
            blanditiis fugit, alias amet ex ducimus reprehenderit quis et est!
            Natus rem rerum quod distinctio corporis ipsum tempore inventore.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <AppButton
              title="Learn More"
              className="md:w-[20%] p-3 mt-10 bg-blue-900 md:bg-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
