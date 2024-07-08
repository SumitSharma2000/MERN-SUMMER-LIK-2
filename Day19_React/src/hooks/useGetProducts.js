import { useState, useEffect } from "react";
import { json } from "react-router-dom";

const useGetProducts = (searchText = "") => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch(
        `https://dummyjson.com/products/search?q=${searchText}`
      );
      const res = await req.json();
      setData(res.products);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  useEffect(() => {
    getData();
  }, [searchText]);

  return data;
};

export default useGetProducts;
