import axios from "axios";
import { useState, useEffect } from "react";

export const GlobalLogics = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getAllPizza();
  }, []);

  const getAllPizza = async () => {
    const { data } = await axios.get(
      "https://star-spark-pasta.glitch.me/api/products"
    );

    setPizzas(data);
    localStorage.setItem("pizzaData", JSON.stringify(data));
  };
  return { pizzas, setCart, cart };
};
