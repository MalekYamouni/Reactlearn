import ProductCard from "../components/ProductCard";
import { useFavorites } from "../context/FavoriteContext"
import { useProducts } from "../context/ProductsContext";
import "../styles/ShoppingCart.css"

function ShoppingCart() {

    const { shoppingCart } = useFavorites();
    const { products } = useProducts();

    const ShoppingCartProducts = products.filter((product) =>
        shoppingCart.includes(product.id))

    const totalSum = () => {
        return (
            ShoppingCartProducts.reduce((sum, products) => sum + products.price, 0))
    }

    return (
        <>
            {shoppingCart.length === 0 ? (
                <h2>Sie haben noch nichts Ihrem Warenkorb hinzugefügt...</h2>
            ) : (
                <>
                    <ProductCard products={ShoppingCartProducts} />
                    {totalSum() > 0 && (
                        <div className="total-sum-background">
                            <p className="total-sum">Gesamtpreis: {totalSum()} €</p>
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default ShoppingCart