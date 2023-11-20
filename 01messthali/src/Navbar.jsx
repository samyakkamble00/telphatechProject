import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between">
          <img
            src="/path-to-your-logo.png"
            alt="Logo"
            className="w-10 h-10 mr-4"
          />
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>

          <div className="flex items-center">
            <button className="text-white bg-blue-700 p-2 rounded-md mr-4">
              Login
            </button>
            <button className="text-white bg-blue-700 p-2 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
