import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/appcontext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(AppContext);
  return (
    <div style={styles.card}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p>Availability: {product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
      <button onClick={() => addToCart(product)} disabled={product.stock <= 0}>
        Add to Cart
      </button>
      <Link to={`/search/products/${product.id}`}>More</Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px",
    width: "calc(25% - 16px)",
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    height: "auto",
  },
};
