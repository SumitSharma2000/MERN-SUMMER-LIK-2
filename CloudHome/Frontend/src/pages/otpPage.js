import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import { useSelector } from "react-redux";
import useNewGenerateNewOtp from "../hooks/useNewGenerateNewOtp";
import useVerifyOtp from "../hooks/useVerifyOtp";

const OtpPage = () => {
  const { email } = useSelector((e) => e.auth);
  const [otp, setOtp] = useState("");
  const { generateNewOtp } = useNewGenerateNewOtp();
  const { verifyOtp } = useVerifyOtp();

  const handleSubmit = () => {
    if (otp.length !== 4 || isNaN(otp)) {
      alert("Please enter a valid 4-digit OTP");
    } else {
      verifyOtp(parseInt(otp));
    }
  };

  useEffect(() => {
    generateNewOtp();
  }, []);

  return (
    <>
      <Navbar />
      <div style={styles.otpPageContainer}>
        <div style={styles.otpPageContent}>
          <div style={styles.otpPageContentHeader}>Verify Your OTP</div>
          <p style={styles.otpPageInstruction}>
            An authentication code has been sent to your registered email: <b>{email}</b>
          </p>
          <div style={styles.otpInputContainer}>
            {[...Array(4)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                style={styles.otpInputBox}
                value={otp[index] || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^[0-9]?$/.test(val)) {
                    const newOtp = otp.split("");
                    newOtp[index] = val;
                    setOtp(newOtp.join(""));
                  }
                }}
              />
            ))}
          </div>
          <button style={styles.otpVerifyButton} onClick={handleSubmit}>
            Verify
          </button>
        </div>
      </div>
    </>
  );
};

const styles = {
  otpPageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: 'url("https://st4.depositphotos.com/25453930/40688/v/450/depositphotos_406885434-stock-illustration-step-authentication-illustration-web-page.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "0 20px",
  },
  otpPageContent: {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  },
  otpPageContentHeader: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  otpPageInstruction: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  otpInputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  otpInputBox: {
    width: "50px",
    height: "50px",
    fontSize: "24px",
    textAlign: "center",
    margin: "0 5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  otpVerifyButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  otpVerifyButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  otpVerifyButtonHover: {
    backgroundColor: "#0056b3",
  }
};

export default OtpPage;
