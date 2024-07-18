import React, { useContext} from "react";
import { useParams } from "react-router-dom";
import CartButton from "../components/cartbtn";
import AppContext from "../context/appcontext";
import useGetProductById from "../hooks/useGetProductById";

export default function ProductDetailPage() {
  const { id } = useParams();
  const {addToCart} = useContext(AppContext)
  const product=useGetProductById(id);
  console.log(product);
  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome! Get more details of {product.title}</h1>
      <div style={styles.card}>
        <img src={product.thumbnail} alt={product.title} style={styles.image} />
        <div style={styles.details}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Availability:</strong>{" "}
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Dimensions:</strong> {product?.dimensions?.width} x{" "}
            {product?.dimensions?.height} x {product?.dimensions?.depth}
          </p>
          <p>
            <strong>Weight:</strong> {product.weight} lbs
          </p>
          <CartButton onClick={() => addToCart(product)} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "left",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px 8px 0 0",
  },
  details: {
    padding: "20px",
  },
};
