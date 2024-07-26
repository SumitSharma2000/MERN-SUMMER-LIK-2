import { useSelector } from "react-redux";

const useDeleteFile = () => {
  const { token } = useSelector((e) => e.auth);
  const deleteFile = async (id) => {
    
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/v1/file/delete`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id}),
      });
      if (!res.ok) {
        throw new Error("Failed to delete file.");
      }
      alert("File deleted successfully.");
    } catch (err) {
      alert("File in useDeleteFile", err.message);
    } 
  };

  return {
    deleteFile,
  };
};

export default useDeleteFile;