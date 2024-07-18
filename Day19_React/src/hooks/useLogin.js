import { useContext } from "react";
import AppContext from "../context/appcontext";

const useLogin = () => {
  const {AppLogin} = useContext(AppContext);

  const login = async ({ email, password }) => {
    console.log("---login called---");
    const URL = "http://localhost:1400/api/v1/auth/login";
    const OPTIONS = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    try {
      const res = await fetch(URL, OPTIONS);
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        alert("Login successful!");
        AppLogin(data.data.user);
        localStorage.setItem("authorization", data.data.token)
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred while logging in. Please try again.");
    }
    
  };
  return { login };
};

export default useLogin;
