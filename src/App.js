import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/Context";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas/:id" element={<Detail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;