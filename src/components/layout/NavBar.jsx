import React, { useState } from "react";
import { SiDatabricks } from "react-icons/si";
import { Link } from "react-router-dom";
import { links } from "../../config/config";
import AppButton from "../AppButton";
import { HiMenuAlt1 } from "react-icons/hi";
import MenuSection from "../MenuSection";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="z-20 text-white h-20 w-full px-8 md:px-40 bg-transparent absolute">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-primary text-4xl md:text-5xl">
            <SiDatabricks />
          </span>
          <h1 className="md:text-3xl text-2xl font-bold cursor-pointer hover:text-primary">
            Secured.
          </h1>
        </div>
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ id, link, to }) => (
            <Link key={id} to={to}>
              <li className="cursor-pointer hover:scale-105 duration-300 capitalize ">
                {link}
              </li>
            </Link>
          ))}
          <AppButton title="Sign In" className="px-7 py-2" />
        </ul>
        <div className="md:hidden" onClick={() => setMenuOpen(true)}>
          <HiMenuAlt1 size={30} />
        </div>
      </div>
      <div>
        <MenuSection menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}

export default NavBar;
