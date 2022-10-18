import { Link } from "react-router-dom";
import { useContext } from "react";

import PizzasContext from "../context/Context";



const Navbar = () => {
  const { cart } = useContext(PizzasContext);
  const total = cart.reduce(
    (a, { count, price }) => a + price * count,
    0
  );
  return (
    <div className="navbar text-white bg-info">
      <div className="container d-block">
        <div className="d-flex justify-content-between bg-slate-500">
          <Link to="/" className="mx-1 mb-0">
            <h2 className="mb-0 font-bold p-2">
             
            🍕 Pizzería Mamma Mia!
            </h2>
          </Link>

          <Link to="/carrito" className="logo-nombre mx-1 mb-0 p-2">
            <p className="carritotext">🛒 Total: {total.toLocaleString(
                                "es-CL",{
                                    style: "currency",
                                    currency: "CLP",
                                }
                            )}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
