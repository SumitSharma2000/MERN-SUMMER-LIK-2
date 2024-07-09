import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import ProductInfoCard from "../components/ProductInfoCard";
import { useNavigate } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

const HomePage = (props) => {
  const { setSearchText, categories } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const products = useGetProducts();
  const reqLength = 16;
  let cnt = 0;
  const filteredProducts = products.filter((ele, idx) => {
    if (Math.random() >= 0.5 || reqLength - cnt === products.length - idx) {
      if (cnt < reqLength) {
        cnt++;
        return true;
      } else return false;
    } else return false;
  });
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3.PC-REC_hero_3000x1200-1day1._CB569789166_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
  ];

  const openSearchPage = () => {
    navigate("/search");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="homepage-root-container">
      <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} />
      <CategoryBar categories={categories} />
      <div className="homepage-body">
        <img
          src={images[currentImageIndex]}
          className="carousal-image"
          alt="Carousel"
        />
        <div className="products-cards-container">
          {[...Array(4).keys()].map((elem) => (
            <ProductInfoCard
              key={elem}
              data={filteredProducts.slice(elem * 4, elem * 4 + 4)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
