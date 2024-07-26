import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup";
import googleLogo from "../images/google_logo.png";
import linkedinLogo from "../images/Linkedin_logo.png";
import githubLogo from "../images/github_logo.png";
import facebookLogo from "../images/fb_logo.jpg";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { signup } = useSignup();
  const navigate = useNavigate();

  const signupPageStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    padding: "10px",
  };

  const formBoxStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "60px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "650px",
    boxSizing: "border-box",
  };

  const inputStyles = {
    padding: "15px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "18px",
    margin: "10px 0",
    boxSizing: "border-box",
  };

  const labelStyles = {
    color: "#000",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const buttonStyles = {
    padding: "15px 30px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#13813a",
    color: "#fff",
    cursor: "pointer",
    fontSize: "18px",
    marginTop: "20px",
    width: "100%",
    textAlign: "center",
  };

  const linkStyles = {
    color: "#1E90FF",
    cursor: "pointer",
    fontSize: "18px",
  };

  const centerTextStyles = {
    textAlign: "center",
    width: "100%",
  };

  const orContainerStyles = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "20px 0",
    position: "relative",
    textAlign: "center",
  };

  const orLineStyles = {
    flex: 1,
    height: "1px",
    backgroundColor: "#000",
  };

  const orTextStyles = {
    color: "#000",
    fontSize: "16px",
    backgroundColor: "#f9f9f9",
    padding: "0 10px",
  };

  const handleSubmit = () => {
    if (firstName && email && password && agreeToTerms) {
      signup({ firstName, email, password });
      console.log("Signup Success");
      navigate("/login");
    } else {
      console.log("Signup Failed");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div style={signupPageStyles}>
      <div style={formBoxStyles}>
        <h1 style={{ color: "#000", marginBottom: "10px", fontSize: "36px" }}>
          Join Us!
        </h1>
        <h2 style={{ color: "#000", marginBottom: "30px", fontSize: "24px" }}>
          Create a CloudHome account
        </h2>
        <p style={{ color: "#000", marginBottom: "30px", fontSize: "16px" }}>
          Be part of a CloudHome community.
        </p>
        <div style={{ width: "100%" }}>
          <label style={labelStyles}>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={inputStyles}
          />
        </div>
        <div style={{ width: "100%" }}>
          <label style={labelStyles}>Email</label>
          <input
            type="email"
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
        <div style={{ width: "100%", margin: "10px 0" }}>
          <input
            type="checkbox"
            id="terms"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
            style={{ marginRight: "5px" }}
          />
          <label htmlFor="terms" style={{ color: "#000", fontSize: "14px" }}>
            I agree to CloudHome's Terms of Service and Privacy Policy.
          </label>
        </div>
        <button type="button" onClick={handleSubmit} style={buttonStyles}>
          Sign Up
        </button>
        <div style={orContainerStyles}>
          <div style={orLineStyles}></div>
          <span style={orTextStyles}>or</span>
          <div style={orLineStyles}></div>
        </div>
        <button
          type="button"
          style={{
            ...buttonStyles,
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img src={googleLogo} alt="Google" style={{ width: "24px" }} />
          Continue with Google
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={googleLogo}
              alt="Google"
              style={{ width: "30px", marginRight: "10px" }}
            />
            Google
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              style={{ width: "30px", marginRight: "10px" }}
            />
            LinkedIn
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={githubLogo}
              alt="GitHub"
              style={{ width: "30px", marginRight: "10px" }}
            />
            GitHub
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={facebookLogo}
              alt="Facebook"
              style={{ width: "30px", marginRight: "10px" }}
            />
            Facebook
          </div>
        </div>
        <div
          style={{
            ...centerTextStyles,
            color: "#000",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Already a user?{" "}
          <span
            style={linkStyles}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            onClick={handleLogin}
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
