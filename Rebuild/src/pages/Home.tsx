import ProductCard from "../components/ProductCard";
import type { ProductCardProps } from "../Interface/ProductCardProps";
import AddProduct from "./AddProduct";
import type { HomeProps } from "../Interface/HomeProps";
import { useFavorites } from "../context/FavoriteContext";
import { useProducts } from "../context/ProductsContext";

function Home({
}: HomeProps) {
  return (
    <div>
      <ProductCard
      />
    </div>
  );
}

export default Home;
