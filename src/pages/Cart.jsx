import { useContext } from "react";
import Context from "../context/Context";

const Cart = () => {
  const { cart, addPizza, takePizza } = useContext(Context);

  const totalPorPizza = (count, price) => {
    const total = count * price;
    return total;
  };

  const total = cart.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <>
      <div className="flex flex-col d-block mt-12 col-auto items-center justify-center min-h-[calc(100vh-104px)]">
        <div className="bg-light m-auto p-5">
          <h5 className="mb-3">TU PEDIDO:</h5>
          <div className="p-4 bg-white align-middle">
            {cart.map((item, i) => (
              <div key={i} className="d-flex justify-content-between py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={item.img} width="50" alt="" />
                  <h6 className="mb-0 text-capitalize p-2 text-sm">{item.name}</h6>
                </div>

                <div className="d-block justify-content-end align-items-center">
                  <h6 className="mb-0 p-2 text-success text-sm">
                    {totalPorPizza(item.count, item.price).toLocaleString(
                      "es-CL",
                      {
                        style: "currency",
                        currency: "CLP",
                      }
                    )}
                  </h6>
                  <button
                    className="btn btn-danger"
                    onClick={() => takePizza(i)}
                  >
                    -
                  </button>
                  <b className="mx-2 text-sm">{item.count}</b>
                  <button
                    className="btn btn-primary"
                    onClick={() => addPizza(i)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <h2 className="my-4">
              Total:{" "}
              {total.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </h2>
            <button className="btn btn-success">Pagar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
