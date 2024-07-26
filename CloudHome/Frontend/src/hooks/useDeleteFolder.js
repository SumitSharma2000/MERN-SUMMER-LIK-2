import { useSelector } from "react-redux";

const useDeleteFolder = () => {
  const { token } = useSelector((e) => e.auth);
  const deleteFolder = async (id) => {
    
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/v1/folder/delete`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id}),
      });
      if (!res.ok) {
        throw new Error("Failed to delete folder.");
      }
      alert("Folder deleted successfully.");
    } catch (err) {
      alert("Error in useDeleteFolder", err.message);
    } 
  };

  return {
    deleteFolder,
  };
};

export default useDeleteFolder;