import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const totalValue = cart.reduce((a, b) => a + b.price, 0);
  // console.log(cart);
  useEffect(() => {}, []);
  const placeOrder = () => {
    setCart([]);
    window.alert("Order Successfull!");
    navigate("/success");
  };
  return (
    <>
      <div className="flex flex-col items-start">
        <button className="m-5 font-bold" onClick={() => navigate("/opizza")}>
          🡠 Back
        </button>
      </div>
      <div className="w-[60%] mx-auto">
        <h2 className="my-12 font-bold text-center text-3xl">Order Details</h2>
        {cart.map((pizza, index) => (
          <PizzaRow pizza={pizza} key={index} />
        ))}
        <hr className="my-6" />
        <div className="flex justify-between mt-6 w-[60%] m-auto">
          <strong>Grand Total: ₹{totalValue}</strong>
          <button
            className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
            onClick={() => {
              placeOrder();
            }}
          >
            Place Order →
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

const PizzaRow = ({ pizza }) => (
  <div className="flex items-center justify-center gap-[50px] mx-auto py-4">
    <div className="flex items-center">
      <img className="h-16" src={pizza.image} alt="pizza-img" />
      <p className="font-bold ml-4 w-48">{pizza.name}</p>
    </div>
    {/* <div className="flex">
      <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
        -
      </button>
      <b className="px-4">5</b>
      <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
        +
      </button>
    </div> */}
    <span className="w-[50px]">
      <strong>₹{pizza.price}</strong>
    </span>
    {/* <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
      Delete
    </button> */}
  </div>
);
