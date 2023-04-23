import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import Home from "./components/pages/Home";
import Opizza from "./components/pages/Opizza";
import Error from "./components/pages/Error";
import Cart from "./components/pages/Cart";
import UserAccount from "./components/pages/UserAccount";
import { GlobalLogics } from "./logic/GlobalLogics";
import OrderDone from "./components/pages/OrderDone";

function App() {
  const { pizzas, cart, setCart } = GlobalLogics();
  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/opizza"
          element={<Opizza pizzas={pizzas} cart={cart} setCart={setCart} />}
        ></Route>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/user" element={<UserAccount />} />
        <Route path="/success" element={<OrderDone />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
