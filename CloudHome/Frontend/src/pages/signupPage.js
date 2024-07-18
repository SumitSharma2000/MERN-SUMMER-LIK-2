import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useSignup();

  const SignupPageStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#000",
    fontFamily: "Arial, sans-serif",
    padding: "10px",
  };

  const formBoxStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px", 
    backgroundColor: "#1a1a1a",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "650px", 
    boxSizing: "border-box",
  };

  const inputStyles = {
    padding: "20px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "25px", 
    margin: "10px 0",
    boxSizing: "border-box",
  };

  const labelStyles = {
    alignSelf: "flex-start",
    color: "#fff",
    fontSize: "20px", 
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const buttonStyles = {
    padding: "20px 40px", 
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    fontSize: "25px", 
    marginTop: "20px",
    width: "100%",
    textAlign: "center",
  };

  const handleSubmit = () => {
    if (email && password) {
      signup({ email, password });
      console.log("Signup Success");
    } else {
      console.log("Signup Failed");
    }
  };

  return (
    <div style={SignupPageStyles}>
      <div style={formBoxStyles}>
        <h1 style={{ color: "#fff", marginBottom: "20px", fontSize: "50px", textAlign: "center" }}>Signup Page</h1> {/* Increased font size for heading */}
        <div style={{ width: "100%" }}>
          <label style={labelStyles}>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyles}
          />
        </div>
        <div style={{ width: "100%" }}>
          <label style={labelStyles}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyles}
          />
        </div>
        <button type="button" onClick={handleSubmit} style={buttonStyles}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
