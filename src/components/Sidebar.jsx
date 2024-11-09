import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ links, isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-60 pt-16 text-2xl   ${isOpen ? "block" : "hidden"}`}
      style={{
        boxShadow: "0 0 0 1000px rgba(0,0,0,0.2),3px 0 5px rgba(0,0,0,0.2)",
      }}
    >
      {links.map((link, index) => (
        <a
          href={link.path}
          key={index}
          className="block px-4 py-2 hover:bg-gray-700 hover:text-white  "
        >
            <FontAwesomeIcon className="mr-2" icon={link.icons} />
          {link.name}
          {/* <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full"></span> */}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
