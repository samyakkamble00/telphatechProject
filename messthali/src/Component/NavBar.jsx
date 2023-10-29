import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "Contact" },
    { id: 4, link: "SignIn" },
    { id: 5, link: "LogIn" },
  ];
  return (
    <div className="flex justify-around items-center pr-8 w-full h-20 fixed px-2 bg-black m-auto">
      <div>
        <h1 className="text-2xl ml-2">MessThali</h1>
      </div>
      <div>
        <div className="hidden lg:block flex flex-row">
          <input
            type="text"
            placeholder="Search Mess Here"
            className="rounded-l-sm outline-none text-black px-4 p-1"
          />
          <button className="bg-gray-500 rounded-r-sm px-4 p-1">Search</button>
        </div>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:underline duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10  text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-5 font-bol text-4xl hover:scale-105 hover:underline duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
