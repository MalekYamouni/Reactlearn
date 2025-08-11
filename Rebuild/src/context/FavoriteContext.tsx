import React, {
  createContext,
  useState,
  type ReactNode,
  useContext,
} from "react";

interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  addToShoppingCart: (id: number) => void;
  shoppingCart: number[];
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [shoppingCart, setShoppingCart] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const addToShoppingCart = (id: number) => {
    setShoppingCart((prev) => prev.includes(id) ? prev.filter((scId) => scId !== id) : [...prev, id])
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, addToShoppingCart, shoppingCart }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
