import axios from "axios";
import { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const getPizzas = async () => {
    const { data } = await axios.get("/pizzas.json");
    setPizzas(data);
    console.log(data);
  };
  useEffect(() => {
    getPizzas();
  }, []);

  const addedItem = (pizzas) => {
    const idPizza = pizzas.id;

    const findPizza = cart.filter((product) => product.id === idPizza);

    if (findPizza.lenght > 0) {
      findPizza[0].count += 1;

      const newCart = cart.filter((product) => product.id!== idPizza);
      console.log(newCart);

      setCart([...newCart, {...findPizza[0]}]);
    }else {
      setCart([...cart, {...pizzas, count:1 }]);
    }

  }


  const takePizza = (e) => {
    const { count } = cart[e];
    if (count === 1) {
      cart.splice(e, 1);
    } else {
      cart[e].count--;
    }
    setCart([...cart]);
  };

  const addPizza = (e) => {
    cart[e].count++;
    setCart([...cart]);
  };




  return (
    <Context.Provider
      value={{ pizzas, cart, setCart, addedItem, addPizza, takePizza }}
    >
      {" "}
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };

export default Context;
