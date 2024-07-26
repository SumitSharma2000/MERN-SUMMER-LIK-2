import { useSelector } from "react-redux";

const useRenameFile = () => {
  const { token } = useSelector((e) => e.auth);

  const renameFile = async ( id, newName ) => {
    try {
      const res = await fetch(
        `${process.env.BACKEND_URL}/api/v1/file/rename`,
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
        throw new Error("Failed to rename file.");
      }
      alert("File renamed successfully.");
    } catch (err) {
      console.log("Error----------", err);
      alert("Error in use rename file", err.message);
    }
  };

  return {
    renameFile,
  };
};

export default useRenameFile;
