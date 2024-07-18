import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const { signUp } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    signUp({ email, password });
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Sign Up</h1>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={styles.input}
          />
        </div>

        <button type="submit" onClick={validate} style={styles.button}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#000",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "600px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "16px",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
    backgroundColor: "#444",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default SignUp;
