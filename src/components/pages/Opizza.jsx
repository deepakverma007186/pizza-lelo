import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";

const Opizza = ({ pizzas, setCart }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-start bg-[#FFF9B0]">
        <button className="m-5 font-bold" onClick={() => navigate("/")}>
          🡠 Back
        </button>
        <Menu pizzas={pizzas} setCart={setCart} />
      </div>
    </>
  );
};

export default Opizza;
