import { useState, useEffect, useContext } from "react";
import AppContext from "../context/appcontext";

const useGetProducts = ({isSearchTextDependent = true}) => {
  const {searchText} = useContext(AppContext)
  const [data, setData] = useState([]);

  const getData = async ({stx}) => {
    try {
      const req = await fetch(
        `https://dummyjson.com/products/search?q=${stx}`
      );
      const res = await req.json();
      setData(res.products);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  useEffect(() => {
    if(isSearchTextDependent){
      getData({stx: searchText})
    }else{
      getData({stx: ''})
    }
  }, [searchText]);

  return data;
};

export default useGetProducts;
