import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import googleLogo from "../images/google_logo.png";
import linkedinLogo from "../images/Linkedin_logo.png";
import githubLogo from "../images/github_logo.png";
import facebookLogo from "../images/fb_logo.jpg";
import eyeIcon from "../images/eye_icon.png";
import eyeSlashIcon from "../images/slace_eye.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { login } = useLogin();
  const navigate = useNavigate();

  const loginPageStyles = {
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
    position: "relative",
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
    backgroundColor: isHovered ? "#0f662a" : "#13813a",
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

  const logoTextStyles = {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  };

  const centerTextStyles = {
    textAlign: "center",
    width: "100%",
  };

  const handleLogin = () => {
    if (email && password) {
      login({ email, password });
      console.log("Login Success");
    } else {
      console.log("Login Failed");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={loginPageStyles}>
      <div style={formBoxStyles}>
        <h1
          style={{
            color: "#000",
            marginBottom: "10px",
            fontSize: "36px",
            textAlign: "left",
          }}
        >
          Welcome Back!
        </h1>
        <h2
          style={{
            color: "#000",
            marginBottom: "30px",
            fontSize: "24px",
            textAlign: "left",
          }}
        >
          Login to your account
        </h2>
        <p
          style={{
            color: "#000",
            marginBottom: "30px",
            fontSize: "16px",
            textAlign: "left",
          }}
        >
          It's nice to see you again.
        </p>
        <div style={{ width: "100%" }}>
          <label style={labelStyles}>Email</label>
          <input
            type="text"
            placeholder="Your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyles}
          />
        </div>
        <div style={{ width: "100%", position: "relative" }}>
          <label style={labelStyles}>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...inputStyles, paddingRight: "40px" }}
          />
          <img
            src={showPassword ? eyeSlashIcon : eyeIcon}
            alt="Toggle Password Visibility"
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: "24px",
              height: "24px",
              marginTop: "8px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
            width: "100%",
          }}
        >
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              style={{ marginRight: "5px" }}
            />
            <label
              htmlFor="rememberMe"
              style={{ color: "#000", fontSize: "14px" }}
            >
              Remember me
            </label>
          </div>
          <div>
            <span
              style={linkStyles}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Forgot password?
            </span>
          </div>
        </div>
        <button type="button" onClick={handleLogin} style={buttonStyles} onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
          Log In
        </button>
        <div
          style={{
            ...centerTextStyles,
            color: "#000",
            margin: "20px 0",
            fontSize: "16px",
          }}
        >
          or continue with
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <div style={logoTextStyles}>
            <img
              src={googleLogo}
              alt="Google"
              style={{ width: "30px", marginRight: "10px" }}
            />
            Google
          </div>
          <div style={logoTextStyles}>
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              style={{ width: "30px", marginRight: "10px" }}
            />
            LinkedIn
          </div>
          <div style={logoTextStyles}>
            <img
              src={githubLogo}
              alt="GitHub"
              style={{ width: "30px", marginRight: "10px" }}
            />
            GitHub
          </div>
          <div style={logoTextStyles}>
            <img
              src={facebookLogo}
              alt="Facebook"
              style={{ width: "30px", marginRight: "10px" }}
            />
            Facebook
          </div>
        </div>
        <div style={{ ...centerTextStyles, color: "#000", fontSize: "16px" }}>
          Don't have an account?{" "}
          <span
            style={linkStyles}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            onClick={handleSignUp}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
