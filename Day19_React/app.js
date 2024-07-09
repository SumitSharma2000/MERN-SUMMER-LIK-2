// App.js
import ReactDOM from "react-dom/client";
import "./globalStyle.css";
import React, { useState } from "react";
import HomePage from "./src/pages/homepage";
import SearchPage from "./src/pages/SearchPage";
import ProductDetailPage from "./src/pages/ProductDetailPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./src/components/Footer";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const productInfoCards = [
  {
    id: 1,
    title: "Appliances for your home | Up to 55% off",
    products: [
      {
        title: "Air Conditioners",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
      },
      {
        title: "Refrigerators",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
      },
      {
        title: "Microwaves",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
      },
      {
        title: "Washing Machines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Revamp your home in style",
    products: [
      {
        title: "Cushion Cover",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
      },
      {
        title: "Figurines, vases & more",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Home storage",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Revamp",
    products: [
      {
        title: "Air Conditioners",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
      },
      {
        title: "Refrigerators",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
      },
      {
        title: "Microwaves",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
      },
      {
        title: "Washing Machines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Revamp",
    products: [
      {
        title: "Air Conditioners",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
      },
      {
        title: "Refrigerators",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
      },
      {
        title: "Microwaves",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
      },
      {
        title: "Washing Machines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
      },
    ],
  },
];

const categories = [
  "Fresh",
  "Amazon MiniTV",
  "Sell",
  "Best Sellers",
  "Mobiles",
  "Todays Deals",
  "Prime",
  "Fashion",
  "Electronics",
];

const [cart, setCart] = useState([]);
const addToCart = (elem) =>{
  const isPresent = cart.findIndex((c1)=>c1.id === elem.id);
  if(isPresent === -1){
    const newCart = [...cart];
    newCart.push({
      id: elem.id,
      title: elem.title,
      price: elem.price,
      count: 1
    });
    setCart(newCart);
}else{
  const newCart = cart.map((cartItem)=>{
    if(cartItem.id === elem.id){
      const newCartItem = {...cartItem};
      newCartItem.count += 1;
      return newCartItem;
  }else return cartItem;
  });
  setCart(newCart);
}
}

const contextValues = {
  cart,
  addToCart
}

const App = () => {
  const [searchText, setSearchText] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          setSearchText={setSearchText}
          productInfoCards={productInfoCards}
          categories={categories}
        />
      ),
    },
    {
      path: "/search",
      element: (
        <SearchPage
          searchText={searchText}
          setSearchText={setSearchText}
          categories={categories}
        />
      ),
    },
    {
      path: "/search/products/:id",
      element: <ProductDetailPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

root.render(<App />);
