import React from "react";
// import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from 'react';
import Sidebar from "./Sidebar";
import { faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    {
      name: "Home",
      path: "/",
      icons:faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icons:faList
      
    },
    
  ]

  return (
    <>
    <div className="h-[60px] w-full shadow-md flex items-center justify-between pl-16 lg:pr-16 font-semibold text-lg sm:pr-10 ">
      <a className="font-bold text-3xl" href="#!">
        F<span className="text-red-600">oo</span>d Recipe
      </a>
      <div className="flex gap-14 uppercase font-bold hidden md:block   ">

        {links.map((link, index) => (
          <a
            key={index}
            className=" underline-offset-8 decoration-red-600 hover:text-red-600 delay-100 duration-100 underline:delay-200 relative group m-4 "
            href="#!"
          >
            {link.name}
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}


        {/* <a
          className=" underline-offset-8 decoration-red-600 hover:text-red-600 delay-100 duration-100 underline:delay-200 relative group"
          href="#!"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a
          className="m-14 underline-offset-8 decoration-red-600 hover:text-red-600 delay-100 duration-100 underline:delay-200 relative group"
          href="#!"
        >
          Recipes
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a
          className=" underline-offset-8 decoration-red-600 hover:text-red-600 delay-100 duration-100 underline:delay-200 relative group"
          href="#!"
        >
          Settings
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
        </a> */}
      </div>
      {/* <div className="h-10 w-10 items-center cursor-pointer odd:active:rotate-45 even:active:-rotate-45 ">
        <div className="h-2 mb-1 w-10 bg-black "></div>
        <div className="h-2 mb-1 w-10 bg-black"></div>
        <div className="h-2 mb-1 w-10 bg-black"></div>
      </div> */}

      <div
        className="items-center h-10 w-8 cursor-pointer pr-4 md:hidden "
        onClick={toggleMenu}
      >
        <div
          className={`h-2 w-10 bg-black my-1 transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-2 w-8 bg-black my-1 transition-opacity duration-300 top-[50%] ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`h-2 w-10 bg-black my-1 transition-transform duration-300 top-[100%] ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
    </div>
    <Sidebar links={links} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
{
  /* <HiMiniBars3CenterLeft className="h-8 w-8  -scale-x-100 " /> */
}
// cursor-pointer active:origin-center active:top-[50%] active:rotate-90
