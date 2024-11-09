import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ links, isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-60 pt-16 text-2xl bg-white  ${isOpen ? "block" : "hidden"}`}
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
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
