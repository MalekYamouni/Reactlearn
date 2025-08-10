import React, {
  createContext,
  useState,
  type ReactNode,
  useContext,
  type SetStateAction,
} from "react";
import type { Product } from "../Interface/ProductsInterface";

interface ProductContextType {
  addProduct: (newProduct: Product) => void;
  deleteProduct: (id: number) => void;
  products: Product[];
  setProducts: React.Dispatch<SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const stored = localStorage.getItem("products");
    return stored
      ? JSON.parse(stored)
      : [
          { id: 1, title: "Handy", release_date: "2020", price: 1020 },
          { id: 2, title: "Kühlschrank", release_date: "2021", price: 1300 },
          { id: 3, title: "Mikrowelle", release_date: "2022", price: 300 },
          { id: 5, title: "Schreibtisch", release_date: "2023", price: 800 },
        ];
  });
  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return(
    <ProductContext.Provider value={{products,setProducts, addProduct, deleteProduct}}>
      {children}
    </ProductContext.Provider>
  )
};
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
