import { useState } from "react";
import { useSelector } from "react-redux";

const useUploadFile = () => {
  const { token } = useSelector((e) => e.auth);
  const [isUploadAllowed, setIsUploadFileAllowed] = useState(true);
  const uploadFile = async ({ file, parentId }) => {
    try {
      setIsUploadFileAllowed(false);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("parentId", parentId);
      const res = await fetch(`${process.env.BACKEND_URL}/api/v1/file`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      console.log("resposne---------" , res);
    } catch (err) {
      alert(err);
    } finally {
      setIsUploadFileAllowed(true);
    }
  };
  return {
    uploadFile,
    isUploadAllowed,
  };
};

export default useUploadFile;
