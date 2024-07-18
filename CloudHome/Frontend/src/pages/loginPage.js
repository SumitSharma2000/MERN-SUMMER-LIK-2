const LoginPage = () =>{
    const loginPageStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: "10px",
    }
    return(
        <div style={loginPageStyles}>
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter the name"/>
            <input type="password" placeholder="Enter the password"/>
            <button type="submit">Login</button>
        </div>
        )
}
export default LoginPage;