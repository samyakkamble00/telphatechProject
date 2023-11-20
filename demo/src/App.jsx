import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className='w-full flex flex-wrap'>
      {data.map((item) => (
        <div key={item.id} className="relative h-[400px] m-4 w-[300px] rounded-md">
          <img
            src={item.image}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{item.title}</h1>
            <p className="mt-2 text-sm text-gray-300">
              {item.body}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              {item.id} &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
