import React from "react";
const Footer = () => {
    const phoneNumber = '+1-555-555-5555';
  return (
    <div className="bg-black p-2 mt-[-50px]">
    
    <div className="w-80 m-auto gap-8 px-8 pb-8 bg-black flex flex-col gap-4 text-center">
      <p>&copy; Copyright by Telphatech and made by Telphadevloper</p>
      <p>Contact us at: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
      <p><a href="mailto:telphatech@gmail.com">Email: telphatech@gmail.com</a></p>
      <p>Address: Pimpri Chinchwad, Pune</p>
      <p><a href="https://telphatech.com/">Website: telphatech.com</a></p>
    </div></div>
  );
};

export default Footer;
