import Card from "../components/Card";
import Header from "../components/Header";


const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="flex flex-wrap gap-5 justify-center pt-5 ">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
