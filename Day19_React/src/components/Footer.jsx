// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.column}>
        <h4>Get to Know Us</h4>
        <ul style={styles.list}>
          <li><a href="/about" style={styles.link}>About Us</a></li>
          <li><a href="/careers" style={styles.link}>Careers</a></li>
          <li><a href="/press" style={styles.link}>Press Releases</a></li>
          <li><a href="/science" style={styles.link}>Amazon Science</a></li>
        </ul>
      </div>
      <div style={styles.column}>
        <h4>Make Money with Us</h4>
        <ul style={styles.list}>
          <li><a href="/sell" style={styles.link}>Sell on Amazon</a></li>
          <li><a href="/affiliate" style={styles.link}>Become an Affiliate</a></li>
          <li><a href="/advertise" style={styles.link}>Advertise Your Products</a></li>
          <li><a href="/self-publish" style={styles.link}>Self-Publish with Us</a></li>
        </ul>
      </div>
      <div style={styles.column}>
        <h4>Amazon Payment Products</h4>
        <ul style={styles.list}>
          <li><a href="/cards" style={styles.link}>Amazon Business Card</a></li>
          <li><a href="/shop-with-points" style={styles.link}>Shop with Points</a></li>
          <li><a href="/reload" style={styles.link}>Reload Your Balance</a></li>
          <li><a href="/currency-converter" style={styles.link}>Amazon Currency Converter</a></li>
        </ul>
      </div>
      <div style={styles.column}>
        <h4>Let Us Help You</h4>
        <ul style={styles.list}>
          <li><a href="/account" style={styles.link}>Your Account</a></li>
          <li><a href="/orders" style={styles.link}>Your Orders</a></li>
          <li><a href="/shipping" style={styles.link}>Shipping Rates & Policies</a></li>
          <li><a href="/help" style={styles.link}>Help</a></li>
        </ul>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "60px",
    backgroundColor: "#232F3E",
    color: "#0F1111",
    marginTop: "32px",
  },
  column: {
    flex: "1",
    margin: "0 16px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};
