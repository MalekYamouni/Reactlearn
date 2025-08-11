import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";

function Home() {

  const { products } = useProducts();

  return (
    <div>
      <ProductCard products={products}
      />
    </div>
  );
}

export default Home;
