const styles = {
    container: {
      height: "100vh",
      width: "100%",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1720962158924-6b1d12429ffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      backgroundRepeat: "no-repeat",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      position: "relative",
      fontFamily: "Arial, sans-serif",
      fontSize: "1.2em",
    },
    content: {
      zIndex: 2,
      textAlign: "left",
      marginBottom: "200px",
      width: "80%",
    },
    heading: {
      fontSize: "4.5em",
      marginBottom: "20px",
      letterSpacing: "2px",
    },
    subheading: {
      fontSize: "1.8em",
      marginBottom: "30px",
      lineHeight: "1.4",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "white",
      color: "black",
      margin: "5px",
      height: "50px",
      cursor: "pointer",
      border: "none",
      fontSize: "1em",
      borderRadius: "5px",
      transition: "background-color 0.3s, color 0.3s",
    },
    buttonCreate: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
    buttonCancel: {
      backgroundColor: "#f44336",
      color: "white",
    },
    buttonHover: {
      backgroundColor: "#ddd",
      color: "black",
    },
    folderContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px",
    },
    backButton: {
      display: "block",
      color: "white",
      cursor: "pointer",
      textDecoration: "none",
      fontSize: "1.2em",
      marginBottom: "20px",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 1,
    },
    createFolderContainer: {
      marginTop: "20px",
    },
    input: {
      padding: "10px",
      marginRight: "10px",
      fontSize: "1em",
    },
    uploadInput: {
      marginTop: "20px",
      padding: "10px",
      border: "2px solid #ddd",
      borderRadius: "5px",
      fontSize: "1em",
      width: "300px",
      height: "50px",
      cursor: "pointer",
      backgroundColor: "white",
      color: "black",
      marginLeft: "10px",
    },
    arrowList: {
      marginTop: "15px",
      display: "flex",
      padding: "0",
      gap: "10px",
      margin: "0",
      alignItems: "center",
      listStyle: "none",
    },
    arrowItem: {
      position: "relative",
      padding: "10px 15px",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1em",
      backgroundColor: "transparent",
    },
    arrowItemAfter: {
      content: '""',
      position: "absolute",
      top: "50%",
      right: "-20px",
      width: "0",
      height: "0",
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent",
      borderLeft: "20px solid white",
      transform: "translateY(-50%)",
    },
    arrowItemBefore: {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "-20px",
      width: "0",
      height: "0",
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent",
      borderRight: "20px solid white",
      transform: "translateY(-50%)",
    },
    renameBox: {
      position: "absolute",
      top: "50%",
      left: "21%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "10px",
      borderRadius: "5px",
      zIndex: 2,
      marginTop: "170px",
    },
    renameInput: {
      padding: "5px",
      marginRight: "5px",
      fontSize: "1em",
    },
    renameButton: {
      padding: "5px 10px",
      fontSize: "1em",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "4px",
    },
  };

  export default styles;