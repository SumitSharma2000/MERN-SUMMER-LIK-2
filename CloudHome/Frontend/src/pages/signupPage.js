import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { signup } = useSignup();

  const SignupPageStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  const handleSubmit = () => {
    const validation = true;
    if (validation) {
      console.log("Signup Success");
      signup({ email, password });
    } else {
      console.log("Signup Failed");
    }
  };
  return (
    <div style={SignupPageStyles}>
      <h1>Signup Page</h1>
      <input
        type="text"
        placeholder="Enter the email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter the password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};
export default SignupPage;
