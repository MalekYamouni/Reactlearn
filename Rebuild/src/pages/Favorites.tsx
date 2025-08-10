import ProductCard from "../components/ProductCard";
import { useFavorites } from "../context/FavoriteContext";
import { useProducts } from "../context/ProductsContext";
import type { FavoriteProps } from "../Interface/FavoriteProps";

function Favorites({ }: FavoriteProps) {

  const {favorites} = useFavorites();
  const {products} = useProducts();

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );
  return (
    <div>
      <h2>Ihre Favoriten</h2>
      {favoriteProducts.length === 0 ? (
        <p>Sie haben noch keine Favoriten...</p>
      ) : (
        <ProductCard
        />
      )}
    </div>
  );
}

export default Favorites;
