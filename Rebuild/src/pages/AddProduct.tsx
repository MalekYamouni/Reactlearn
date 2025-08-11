import { useState } from "react";
import type { Product } from "../Interface/ProductsInterface";
import { useProducts } from "../context/ProductsContext";
import "../styles/AddProduct.css"

function AddProductForm() {

  const {addProduct} = useProducts();

  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [price, setPrice] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const numericPrice = Number(price);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!price || numericPrice <= 0 || isNaN(numericPrice)) {
      setError("Bitte geben Sie einen gültigen Preis ein.");
      setPrice("");
      return;
    }

    if (title.trim() === "" || releaseDate.trim() === "") {
      setError("Bitte alle Felder ausfüllen");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      title,
      release_date: releaseDate,
      price: numericPrice,
    };

    addProduct(newProduct);

    setError(null);
    setTitle("");
    setPrice("");
    setReleaseDate("");
  };

  return (
    <div className="addProduct-form">
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-product-name">
          <input
            type="text"
            value={title}
            placeholder="Produktname"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-releasedate">
          <input
            type="text"
            value={releaseDate}
            placeholder="Veröffentlichung"
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        <div className="form-price">
          <input
            type="text"
            value={price}
            placeholder="Preis in €"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit">Produkt hinzufügen</button>
      </form>
    </div>
  );
}

export default AddProductForm;
