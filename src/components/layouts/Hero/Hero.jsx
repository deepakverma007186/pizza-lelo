import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex bg-gradient-to-t from-[#FFAB73] to-[#FFF9B0] h-screen">
        {/* text section */}
        <div className="flex items-center justify-center w-[60%]">
          <div className=" w-[60%] flex-col justify-start ">
            <h2 className="text-[3rem] font-extrabold">Craving for Pizza!</h2>
            <p className="font-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              nihil cumque ab commodi unde nisi provident eveniet dignissimos
              consectetur! Dolores, quasi voluptatibus libero repellat autem
              quaerat accusantium alias harum itaque.
            </p>
            <NavLink to="/opizza">
              <button className="pizza-btn">Feed Me</button>
            </NavLink>
          </div>
        </div>
        {/* image section */}
        <div className="flex items-center justify-center w-[40%]">
          <img className="animate-bounce-10s" src="/images/pizza.png" />
        </div>
      </div>
    </>
  );
};

export default Hero;
