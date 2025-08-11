import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AddProduct from "./pages/AddProduct";
import { useEffect } from "react";
import { useProducts } from "./context/ProductsContext";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const { setProducts, products} = useProducts();
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/favorites"
            element={
              <Favorites/>
            }
          ></Route>
          <Route
            path="addProduct"
            element={<AddProduct />}
          ></Route>
          <Route path="/shoppingcart" element={<ShoppingCart />}>

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
