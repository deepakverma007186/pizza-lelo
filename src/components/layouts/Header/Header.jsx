import { Avatar } from "@mui/joy";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = ({ cart }) => {
  return (
    <>
      <header className="bg-[#FFAB73] h-[10vh] flex items-center">
        <nav className="flex items-center justify-between w-[90%] mx-auto">
          <Link to="/">
            <img src="/images/logo.png" alt="logo-img" />
          </Link>
          <div className="flex items-center gap-[5vw]">
            <div>
              <ul className="flex items-center gap-[3vw] text-slate-700 font-semibold">
                <li>
                  <NavLink to="/" className="hover:text-[#FFF9B0] duration-500">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/opizza"
                    className="hover:text-[#FFF9B0] duration-500"
                  >
                    OP Pizza
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink
              to="/cart"
              className="flex items-center relative cursor-pointer"
            >
              <span className="absolute top-[-10px] left-[-10px] text-white bg-red-600 rounded-full text-[0.6rem] px-2 py-1">
                {cart?.length}
              </span>
              <AiOutlineShoppingCart className="text-[1.7rem] font-light text-[#FFF9B0]" />
            </NavLink>
            <NavLink to="/user" className="cursor-pointer">
              <Avatar>PI</Avatar>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
