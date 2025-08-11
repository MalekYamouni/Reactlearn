import "../styles/ProductCard.css";
import type { ProductCardProps } from "../Interface/ProductCardProps";
import { useProducts } from "../context/ProductsContext";
import { useFavorites } from "../context/FavoriteContext";

function ProductCard({products

}: ProductCardProps) {

  const { deleteProduct } = useProducts();
  const { favorites, shoppingCart, toggleFavorite, addToShoppingCart} = useFavorites();

  return (
    <div className="product-card">
      {products.map((product) => (
        <div key={product.id} className="product-card-section">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-release_date">
            Veröffentlichung: {product.release_date}
          </p>
          <p className="product-price">Preis: {product.price} €</p>
          <button
            className="favorite-button "
            onClick={() => toggleFavorite(product.id)}
          >
            {favorites.includes(product.id) ? "❤️" : "🤍"}
          </button>
          <button className="cart-button" onClick={ () => addToShoppingCart(product.id)}>{shoppingCart.includes(product.id) ? "🔙":"🛒"}</button>
          <button
            className="delete-button"
            onClick={() => deleteProduct(product.id)}
          >
            🗑️
          </button>

        </div>
      ))}
    </div>
  );
}

export default ProductCard;
