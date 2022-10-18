import "../styles/Header.css";

const Header = () => {
    return (
      <div className="header d-flex flex-column justify-content-center text-white text-center">
        <hr className="w-75 mx-auto mb-2" />
        <h1 >Pizzería Mamma Mia</h1>
        <h6 className=" font-bold ">¡Tenemos las mejores pizzas!</h6>
        <hr className="w-75 mx-auto mt-3" />
      </div>
    );
  };
  
  export default Header;