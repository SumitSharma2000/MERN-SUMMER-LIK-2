import ReactDOM from "react-dom/client";
import "./globalStyle.css";
import React, { useState } from "react";
import HomePage from "./src/pages/homepage";
import SearchPage from "./src/pages/SearchPage";
import ProductDetailPage from "./src/pages/ProductDetailPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./src/components/Footer";
import SignUp from "./src/pages/signUp";
import Login from "./src/pages/login";
import AppContext from "./src/context/appcontext";

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
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_dcor._SY116_CB555624324_.jpg",
      },
      {
        title: "Wall Stickers",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Wall_decor._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting Solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_lamps._SY116_CB555624324_.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Starting Rs 99 | Amazon Brands & more",
    products: [
      {
        title: "t-shirts, tops & more",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/MSO/Feb_2024/Heros/QC/PC/2--1._SY232_CB615801941_.jpg",
      },
      {
        title: "Backpacks",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/MSO/Feb_2024/Heros/QC/PC/2--2._SY232_CB615801941_.jpg",
      },
      {
        title: "Soft Toys",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/MSO/Feb_2024/Heros/QC/PC/2--3._SY232_CB615801941_.jpg",
      },
      {
        title: "Storage & Organisation",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/MSO/Feb_2024/Heros/QC/PC/2--4._SY232_CB615801941_.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Inspired by your browsing history",
    products: [
      {
        title: "Home products",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Furniture/BCMHDR/DesktopGateway-QC-1x-Best_of_Home_Furnishing._SY116_CB667594011_.jpg",
      },
      {
        title: "Trending Deals",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Furniture/BCMHDR/DesktopGateway-QC-1x-Best_of_Home_Furnishing._SY116_CB667594011_.jpg",
      },
      {
        title: "Winter wear",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Furniture/BCMHDR/DesktopGateway-QC-1x-Best_of_Home_Furnishing._SY116_CB667594011_.jpg",
      },
      {
        title: "Bedroom products",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Furniture/BCMHDR/DesktopGateway-QC-1x-Best_of_Home_Furnishing._SY116_CB667594011_.jpg",
      },
    ],
  },
];

const categories = [
  "Mobiles",
  "Bestseller",
  "Electronics",
  "Fashion",
  "Customer Service",
  "Prime",
  "Home & Kitchen",
  "Amazon Pay",
  "Computers",
  "Toys & Games",
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [loggedInUser, setLoggedUser] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/",
      element: loggedInUser ? <SignUp /> : <HomePage />,
    },
    {
      path: "/signup",
      element: loggedInUser ? <HomePage /> : <SignUp />,
    },
    {
      path: "/login",
      element: loggedInUser ? <HomePage /> : <Login />,
    },
    {
      path: "/search",
      element: loggedInUser ? <SignUp /> : <SearchPage />,
    },
    {
      path: "search/products/:id",
      element: loggedInUser ? <SignUp /> : <ProductDetailPage />,
    },
  ]);

  const [cart, setCart] = useState([]);
  const addToCart = (elem) => {
    console.log(elem);
    const isPresent = cart.findIndex((cI) => cI.id === elem.id);
    if (isPresent === -1) {
      const newCart = [...cart];
      newCart.push({
        title: elem.title,
        id: elem.id,
        price: elem.price,
        count: 1,
      });
      setCart(newCart);
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === elem.id) {
          const newCartItem = { ...cartItem };
          newCartItem.count = newCartItem.count + 1;
          return newCartItem;
        } else return cartItem;
      });
      setCart(newCart);
    }
  };

  const AppLogin = (user) => {
    setLoggedUser(user);
  };
  console.log("State", loggedInUser);

  const contextValues = {
    loggedInUser,
    cart,
    addToCart,
    categories,
    searchText,
    setSearchText,
    AppLogin,
  };

  return (
    <AppContext.Provider value={contextValues}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

root.render(<App />);
