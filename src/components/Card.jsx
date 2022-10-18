import { useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";





const Card = () => {
  const { pizzas, addedItem } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <div className="container-card">
        <div className="row">
            {pizzas.map((pizza) => (
                <div key={pizza.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card" style={{minWidth: "300px"}}>
                        <img 
                        className="card-img-top"
                        src={pizza.img} 
                        alt="pizzapic" 
                        />
                        <div className="card-body">
                            <p className="card-title text-center text-capitalize"><strong>Pizza {pizza.name} </strong></p>
                            <hr />
                            <p className="card-text text-center mt-2 ">
                                <b>Ingredientes: </b>
                            </p>

                            <ul className="text-center mt-2 text-capitalize">
                                {pizza.ingredients.map((ingredient, i)=>(
                                    <li key={i}>{ingredient}</li>
                                ))}
                            </ul>
                                    <hr className="mt-3"/>
                        </div>

                        <h2 className="text-center mt-1 mb-3 text-xl"><strong>
                            Precio: {pizza.price.toLocaleString(
                                "es-CL",{
                                    style: "currency",
                                    currency: "CLP",
                                }
                            )}
                        </strong>
                        </h2>

                        <div className="d-flex justify-content-evenly mb-4">
                            <button
                            className="btn btn-info text-white"
                            to={`/pizza/${pizza.id}`}
                            onClick={() => navigate(`/pizzas/${pizza.id}`)}
                            >
                                Ver Mas
                            </button>

                            <button
                            className="btn btn-danger text-white"
                            to={`/pizza/${pizza.id}`}
                            onClick={() => addedItem(pizza)}
                            >
                                Añadir
                            </button>

                        

                        </div>


                        

                    </div>

                </div>
            ))}

        </div>

      </div>
    </>
  );
};

export default Card;
