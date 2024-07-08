import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p>Availability: {product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
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
