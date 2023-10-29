import React from "react";
import Info from "./Info";

const Home = () => {
  return (
    <div className="h-fit pt-20 w-full pb-16">
      <div className="w-full pt-4 pr-4 lg:hidden flex flex-row justify-center">
        <input
          type="text"
          placeholder="Search Mess Here"
          className="rounded-l-sm outline-none text-black px-4 p-1"
        />
        <button className="bg-gray-500 rounded-r-sm px-4 p-1">Search</button>
      </div>
      <div className="w-full flex flex-col justify-center text-center px-8 p-4">
        <h3>Explore Your Nearby Homely Mess</h3>
        <p>
          Explore a variety of mess options that offer healthy homemade meals.
        </p>
      </div>
      <div className="w-4/5 flex flex-wrap m-auto ">
        <Info />
      </div>
    </div>
  );
};

export default Home;
