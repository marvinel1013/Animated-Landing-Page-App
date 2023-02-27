import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { links } from "../config/config";
import AppButton from "./AppButton";

function MenuSection({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={
        menuOpen
          ? "fixed top-0 h-full w-full left-0 bg-gray-800/70 backdrop-blur duration-500 ease-in"
          : "fixed top-0 w-full left-0 duration-500 ease-in"
      }
    >
      <div
        className={
          menuOpen
            ? "w-full bg-secondary h-80 duration-500 ease-out p-3"
            : "w-full bg-secondary h-80 mt-[-1000px] duration-500 ease-in"
        }
      >
        <div className="flex justify-center" onClick={() => setMenuOpen(false)}>
          <MdOutlineClose size={30} />
        </div>
        <div>
          <ul className="mt-5">
            {links.map((data) => (
              <Link to={data.to}>
                <li
                  onClick={() => setMenuOpen(false)}
                  key={data.id}
                  className="capitalize text-xl mt-3 text-center"
                >
                  {data.link}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center mt-8">
            <AppButton title="Sign In" className="p-2 px-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
