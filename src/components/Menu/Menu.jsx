import Pizza from "./Pizza";

const Menu = ({ pizzas, setCart }) => {
  return (
    <>
      <div className="container mx-auto px-14">
        <h1 className="text-lg font-bold my-8">Pizza Mania</h1>
        <div className="grid grid-cols-5 my-8 gap-24">
          {pizzas.map((pizza) => (
            <Pizza key={pizza._id} pizza={pizza} setCart={setCart} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
