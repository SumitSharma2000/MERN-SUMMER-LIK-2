import { useSelector } from "react-redux";
import { useState } from "react";

const useGetFileFolders = () => {
  const { token } = useSelector((e) => e.auth);
  const [filefolders, setFileFolders] = useState([]);
  const getFileFolders = async (parentId = null) => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/api/v1/fileFolder`,
        {
            method: "POST",
            body: JSON.stringify({ parentId }),
            headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("data---------------------------", data);
      setFileFolders(data.data);
    } catch (err) {
      alert(err.message);
    }
  };
 
  return { getFileFolders, filefolders };
};
export default useGetFileFolders;
