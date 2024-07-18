const useSignup = () => {
  const signup = async ({ email, password }) => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/api/vi/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      //   console.log(error);
      alert("SignUp error");
    }
  };
  return { signup };
};
export default useSignup;
