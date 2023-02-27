import React from "react";
import AppButton from "../components/AppButton";
import Image from "../assets/contact-bg.png";

function Contact() {
  return (
    <div className="min-h-screen w-full">
      <img
        src={Image}
        alt="hero-image"
        className="relative z-[-1] h-screen w-full object-cover"
      />
      <div className="text-white md:mt-[-630px] mt-[-500px] h-full w-full flex justify-center ">
        <div className="">
          <h1
            className="md:text-5xl text-3xl font-bold mb-7"
            data-aos="fade-down"
          >
            <span className="text-primary">Contact</span> Us
          </h1>
          <div
            className="flex md:text-base text-sm text-white flex-col gap-5 md:w-[500px] w-[340px]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <input
              type="text"
              className="p-3 outline-none placeholder:text-gray-100 rounded-lg bg-blue-900/70"
              placeholder="Enter your Name"
            />
            <input
              type="email"
              className="p-3 outline-none placeholder:text-gray-100 rounded-lg bg-blue-900/70"
              placeholder="Enter your Email"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className=" resize-none outline-none p-3 rounded-lg placeholder:text-gray-100 bg-blue-900/70"
              placeholder="Enter your Message"
            ></textarea>
            <AppButton title="Submit" className="w-[30%] p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
