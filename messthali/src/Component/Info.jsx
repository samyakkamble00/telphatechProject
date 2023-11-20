import React from "react";
import {ImLocation} from "react-icons/im"
import {AiOutlineShoppingCart} from "react-icons/ai"
const Info = () => {
  const array = [
    {
      id: 1,
      name: "Healthy Bites Mess",
      Owner: "Renuka",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: [
        "Veg Thali - $10",
        "Biryani - $12",
        "Veg Thali - $10",
        "Biryani - $12",
      ],
    },
    {
      id: 2,
      name: "Healthy Bites Mess",
      Owner: "Samyak",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: [
        "Veg Thali - $10",
        "Veg Thali - $10",
        "Veg Thali - $10",
        "Veg Thali - $10",
        "Biryani - $12",
      ],
    },
    {
      id: 3,
      name: "Healthy Bites Mess",
      Owner: "Snehal",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: ["Veg Thali - $10", "Veg Thali - $10", "Biryani - $12"],
    },
    {
      id: 4,
      name: "Healthy Bites Mess",
      Owner: "Rahul",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: [
        "Veg Thali - $10",
        "Biryani - $12",
        "Biryani - $12",
        "Biryani - $12",
      ],
    },
    {
      id: 5,
      name: "Healthy Bites Mess",
      Owner: "Anuradha",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: [
        "Veg Thali - $10",
        "Biryani - $12",
        "Biryani - $12",
        "Biryani - $12",
        "Biryani - $12",
        "Biryani - $12",
        "Biryani - $12",
        "Biryani - $12",
      ],
    },
    {
      id: 6,
      name: "Healthy Bites Mess",
      Owner: "John Doe",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: [
        "Biryani - $12",
        "Biryani - $12",
        "Veg Thali - $10",
        "Veg Thali - $10",
      ],
    },
    {
      id: 7,
      name: "Healthy Bites Mess",
      Owner: "John Doe",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: [
        "Biryani - $12",
        "Biryani - $12",
        "Biryani - $12",
        "Veg Thali - $10",
        "Veg Thali - $10",
        "Veg Thali - $10",
        "Veg Thali - $10",
      ],
    },
    {
      id: 8,
      name: "Healthy Bites Mess",
      Owner: "John Doe",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: ["Veg Thali - $10", "Biryani - $12"],
    },
    {
      id: 9,
      name: "Healthy Bites Mess",
      Owner: "John Doe",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: ["Veg Thali - $10", "Biryani - $12"],
    },
    {
      id: 10,
      name: "Healthy Bites Mess",
      Owner: "John Doe",
      Address: "123 Main Street, Pune, Hadapsar",
      Menu: ["Veg Thali - $10", "Biryani - $12"],
    },
  ];

  return (
    <>

      {array.map(({ id, name, Owner, Address, Menu }) => (
        <div
          key={id}
          className="rounded-lg group relative bg-slate-50 w-60 h-fit shadow-black text-black p-3 m-6 gap-8
          hover:scale-105 "
        >
          <img
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Food"
            className="rounded-lg mb-4 hover:scale-105 "
          />
          <h3>{name}</h3>
          <div>
            <span className="font-bold">Owner:</span> {Owner}
          </div>
          <div>
            <span className="font-bold">Address:</span> {Address}
          </div>
          <div className="hidden  group-hover:block">
            <div className="font-bold">Menu:</div>
            <ul className="w-full flex flex-col justify-center">
              {Menu.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row justify-between">
            <button className="hover:scale-105 rounded-lg bg-slate-600 p-1 px-3 mt-2 flex ">
            <ImLocation size={15} className="mb-[-10px]"/>Location</button>
            <button className="hover:scale-105 rounded-lg bg-slate-600 p-1 px-3 mt-2 flex"><AiOutlineShoppingCart size={15} className="mb-[-10px]"/> Order</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Info;
