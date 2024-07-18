import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    const validate1 = email.length > 4;
    const validate2 = password.length >= 8;
    if (validate1 && validate2) {
      login({ email, password });
    } else if (!validate1) {
      alert("Email is not valid");
    } else {
      alert("Password should be greater than 7 characters");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Login</h1>

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
          Login
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

export default Login;
