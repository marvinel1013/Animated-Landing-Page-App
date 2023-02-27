import React from "react";
import Image from "../../assets/footer-bg.jpg";
import { SiDatabricks } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
  navigationData,
  myAccountData,
  informationData,
  legalData,
} from "../../config/config";

import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="md:h-[400px] w-full h-screen">
      <img
        src={Image}
        alt="hero-image"
        className="relative z-[-1] h-full w-full object-cover"
      />
      <div className="text-white md:mt-[-350px] mt-[-570px]">
        <div className="md:px-36 px-8">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-4xl text-primary">
                <SiDatabricks />
              </span>
              <h1 className="text-secondary md:text-4xl text-2xl font-bold">
                Secured.
              </h1>
            </div>
            <div
              className="md:p-5 p-2 bg-primary w-fit rounded-full cursor-pointer"
              onClick={() => window.scroll(0, 0)}
            >
              <FaArrowUp size={20} />
            </div>
          </div>
          <div
            className="flex md:flex-row flex-col md:items-center justify-between"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="text-secondary mt-10 grid grid-cols-2 md:grid-cols-5 md:text-base md:gap-5 gap-3 text-sm">
              <div>
                {/* Navigation */}
                <h1 className="font-bold mb-5 uppercase">navigation</h1>
                <ul>
                  {navigationData.map(({ id, title }) => (
                    <li key={id} className="capitalize mb-2">
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {/* My Account */}
                <h1 className="font-bold mb-5 uppercase">my account</h1>
                <ul>
                  {myAccountData.map(({ id, title }) => (
                    <li key={id} className="capitalize mb-2">
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {/* Information */}
                <h1 className="font-bold mb-5 uppercase">information</h1>
                <ul>
                  {informationData.map(({ id, title }) => (
                    <li key={id} className="capitalize mb-2">
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {/* Legal */}
                <h1 className="font-bold mb-5 uppercase">legal</h1>
                <ul>
                  {legalData.map(({ id, title }) => (
                    <li key={id} className="capitalize mb-2">
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="h-full flex flex-col items-center md:mt-0 mt-5 md:w-[30%] text-secondary">
              {/* Join our Team */}
              <h1 className="font-bold mb-5 uppercase text-start">
                join our team
              </h1>

              <div className="flex w-[85%] items-center border-2 border-gray-400 bg-gray-50 rounded-md p-2">
                <input
                  type="text"
                  className="outline-none p-2 w-full bg-transparent"
                  placeholder="Enter your email"
                />
                <span className=" cursor-pointer">
                  <MdOutlineEmail size={25} />
                </span>
              </div>
              <div className="flex items-center md:ml-[-5px] md:gap-8 gap-5 md:justify-center md:mt-5 mt-3 md:text-4xl text-3xl cursor-pointer">
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <FaInstagramSquare />
                </span>
                <span>
                  <FaLinkedin />
                </span>
                <span>
                  <FaGithub />
                </span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-center md:text-base text-xs text-primary mt-5">
              © “Landing Page by Marvinel” | 2023 All right reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
