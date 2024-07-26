import { useSelector } from "react-redux";

const useNewGenerateNewOtp = () => {
  const { token } = useSelector((e) => e.auth);
  const generateNewOtp = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/api/v1/auth/generate`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error", err);
    }
  };
  return { generateNewOtp };
};
export default useNewGenerateNewOtp;
