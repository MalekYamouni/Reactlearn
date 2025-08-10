import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AddProduct from "./pages/AddProduct";
import { useEffect } from "react";
import { FavoritesProvider, useFavorites } from "./context/FavoriteContext";
import { useProducts } from "./context/ProductsContext";

function App() {
  const { setProducts, products, addProduct, deleteProduct } = useProducts();
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
        </Routes>
      </BrowserRouter>
  );
}

export default App;
