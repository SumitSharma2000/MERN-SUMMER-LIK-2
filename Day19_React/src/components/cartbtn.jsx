import React from 'react';

const CartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      Add to Cart
    </button>
  );
};

const styles = {
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginLeft: "10px",
  },
  buttonHover: {
    backgroundColor: "#218838",
  }
};

export default CartButton;
