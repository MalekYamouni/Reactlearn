import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FavoritesProvider } from "./context/FavoriteContext.tsx";
import { ProductProvider } from "./context/ProductsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ProductProvider>
  </StrictMode>
);
