import { useNavigate } from "react-router-dom";
const useLogin = () => {

  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/api/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        navigate(`/`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("login error");
    }
  };
  return { login };
};
export default useLogin;
