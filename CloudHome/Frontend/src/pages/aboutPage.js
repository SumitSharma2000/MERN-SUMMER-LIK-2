import React from "react";
import Navbar from "../components/navbar/navbar";
import aboutBg from '../images/about_bg.avif';


const AboutPage = () => {
  const styles = {
    page: {
      backgroundImage: `url(${aboutBg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "white",
      padding: "40px 20px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.7em",
      marginBottom: "25px",
      color: "#000000", 
    },
    paragraph: {
      fontSize: "1.4em",
      fontWeight: "2em",
      marginBottom: "15px",
      maxWidth: "800px",
      lineHeight: "1.6",
    },
    signatureContainer: {
      marginTop: "30px",
      textAlign: "center",
      fontStyle: "italic",
    },
    signature: {
      marginTop: "10px",
      fontWeight: "bold",
      fontSize: "1.5em", 
      color: "#000000", 
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.page}>
        <h1 style={styles.heading}>CloudHome</h1>
        <p style={styles.paragraph}>
          Cloud Home is a unique, safe, and scalable private drive designed to provide a secure haven for your data and documents. With a focus on privacy and ease of access, Cloud Home ensures that your valuable information is always at your fingertips, whether you're at home, in the office, or on the go.
        </p>
        <p style={styles.paragraph}>
          Our platform offers a robust and user-friendly interface, allowing you to manage your files with ease. Whether it's personal documents, work files, or cherished photos, Cloud Home provides a seamless experience to store, organize, and share your data securely. We prioritize your privacy, using advanced encryption and secure access protocols to protect your information from unauthorized access.
        </p>
        <p style={styles.paragraph}>
          At Cloud Home, we believe that your data should be as safe as it is accessible.
        </p>
        <p style={{ ...styles.paragraph, color: "black", marginTop: "20px" }}>
  Our commitment to security and scalability means that you can trust Cloud Home to grow with your needs, providing ample space and features as your data storage requirements evolve. Join us at Cloud Home and experience the peace of mind that comes with knowing your data is protected and accessible whenever you need it.
</p>
        <div style={styles.signatureContainer}>
          <p style={styles.signature}>Sumit Sharma...</p>
          <p style={styles.signature}>Cloud Home</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
