import { useState } from "react";
import { NavLink } from "react-router-dom";

const Pizza = ({ pizza, setCart }) => {
  const btnStyle =
    "rounded-b-md leading-none text-[1.2rem] py-2 text-white w-full mt-[10px] bg-[#FFAB73] hover:bg-red-400 duration-500";
  const [isCartEnabled, setIsCartEnabled] = useState(false);
  // console.log(pizza);
  return (
    <>
      <div className="shadow-xl rounded-md">
        <div className="text-center">
          <h2 className="bg-red-400 text-[1.2rem] py-1 font-semibold rounded-t-md text-white">
            {pizza.name}
          </h2>
          <img src={pizza.image} className="object-contain" />
          <div className="flex justify-evenly py-2 font-bold">
            <span>{pizza.size}</span>
            <span>₹{pizza.price}</span>
          </div>
          {isCartEnabled ? (
            <button className={`${btnStyle} bg-green-400`}>
              <NavLink to="/cart">Go to Cart</NavLink>
            </button>
          ) : (
            <button
              className={`${btnStyle}`}
              onClick={(e) => {
                setCart((pre) => [...pre, pizza]);
                setIsCartEnabled(true);
              }}
            >
              Add Me
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Pizza;
