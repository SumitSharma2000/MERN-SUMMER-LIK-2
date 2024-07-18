import React from 'react';

const HomePage = () => {
  const styles = {
    container: {
      height: '100vh',
      width: '100%',
      backgroundImage: 'url("https://images.unsplash.com/photo-1720962158924-6b1d12429ffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      zIndex: 2,
    },
    heading: {
      fontSize: '4em',
      marginBottom: '20px',
      letterSpacing: '2px',
    },
    subheading: {
      fontSize: '1.5em',
      marginBottom: '30px',
      lineHeight: '1.4',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Our CloudyHome</h1>
        <p style={styles.subheading}>
          Discover a place where you can connect, learn, and grow with others.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
