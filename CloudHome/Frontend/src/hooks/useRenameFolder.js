import { useSelector } from "react-redux";

const useRenameFolder = () => {
  const { token } = useSelector((e) => e.auth);

  const renameFolder = async ( id, newName ) => {
    try {
      const res = await fetch(
        `${process.env.BACKEND_URL}/api/v1/folder/rename`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id, newName}),
        }
      );
      const data = await res.json();
      console.log("response is", data.message);
      if (!res.ok) {
        throw new Error("Failed to rename folder.");
      }
      alert("Folder renamed successfully.");
    } catch (err) {
      console.log("Error----------", err);
      alert("Error in use rename folder", err.message);
    }
  };

  return {
    renameFolder,
  };
};

export default useRenameFolder;
