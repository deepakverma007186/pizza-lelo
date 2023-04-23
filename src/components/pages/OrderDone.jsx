import React from "react";
import { NavLink } from "react-router-dom";

const OrderDone = () => {
  return (
    <>
      <div className="w-[80%] mx-auto my-10 flex justify-around ">
        <img src="/images/empty-cart.png" alt="empty-cart" />
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <h2 className="text-4xl">Wanna eat more...</h2>
          <NavLink to="/opizza">
            <button className="pizza-btn">Feed Me</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OrderDone;
