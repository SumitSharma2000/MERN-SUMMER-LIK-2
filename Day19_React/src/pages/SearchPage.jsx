import React from "react";
import { Link } from "react-router-dom";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import useGetProducts from "../hooks/useGetProducts";
import { useContext } from "react";
import AppContext from "../context/appcontext";
import CartButton from "../components/cartbtn";

export default function SearchPage(props) {
  const { categories, searchText, setSearchText } = props;
  const products = useGetProducts(searchText);
  const { addToCart } = useContext(AppContext);

  return (
    <div>
      <Navbar setSearchText={setSearchText} />
      <CategoryBar categories={categories} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((ele) => (
          <div key={ele.id} style={{ ...styles.card }}>
            <img src={ele.thumbnail} alt={ele.title} style={styles.image} />
            <h3>{ele.title}</h3>
            <p>Price: ${ele.price}</p>
            <p style={styles.description}>{ele.description}</p>
            <div style={{ flexGrow: 1 }}></div>
            <Link to={`/search/products/${ele.id}`} style={styles.link}>
              More
            </Link>
            <CartButton onClick={() => addToCart(ele)} />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px",
    flex: "1 1 calc(25% - 16px)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  description: {
    flexGrow: 1,
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    marginTop: "10px",
    display: "inline-block",
  },
};

