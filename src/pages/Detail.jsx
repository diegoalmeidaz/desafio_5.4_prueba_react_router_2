import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../context/Context";
import "../styles/Detail.css";

const Detail = () => {
  const { pizzas, addedItem } = useContext(Context);
  const { id } = useParams();
  const pizzaInfo = pizzas.find((x) => x.id === id);

  return (
    <>
      <div className="container mt-5">
        <div className="card containerstyle mb-3" >
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={pizzaInfo.img}
                className="img-fluid rounded-start"
                alt={pizzaInfo.name}
              />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title mb-2 text-capitalize">Pizza {pizzaInfo.name}</h5>
                <hr />
                <p className="card-text mb-2 mt-2">{pizzaInfo.desc}</p>
                <hr />
                <ul className="mt-2 mb-2 subti">
                  Ingredientes:
                  {pizzaInfo.ingredients?.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
                <hr />
                <div className="col justify-content-around mt-3">
                  <h4 className="precio">Precio: {pizzaInfo.price.toLocaleString(
                                "es-CL",{
                                    style: "currency",
                                    currency: "CLP",
                                }
                            )}</h4>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => addedItem(pizzaInfo)}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
