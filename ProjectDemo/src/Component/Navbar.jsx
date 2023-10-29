import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white font-bold text-xl">My React Navbar</a>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
