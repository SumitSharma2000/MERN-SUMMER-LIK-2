import { useSelector } from "react-redux";

const useCreateFolder = () => {
  const { token } = useSelector((e) => e.auth);

  const createFolder = async ({ name, parentId }) => {
    console.log('--------',parentId)
    try {
      const res = await fetch(
        `${process.env.BACKEND_URL}/api/v1/folder/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
          },
          body: JSON.stringify({ name, parentId }),
        }
      );
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.log("Error in createfolder", err);
    }
  };
  return { createFolder };
};

export default useCreateFolder;
