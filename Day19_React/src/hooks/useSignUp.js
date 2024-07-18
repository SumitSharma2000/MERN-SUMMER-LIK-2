const useSignUp = () => {
  const signUp = async ({email, password}) => {
    console.log("---SignUp Called---")
    const URL = "http://localhost:1400/api/v1/auth/signup";
    const OPTIONS = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    try {
      const res = await fetch(URL, OPTIONS);
      const data = await res.json();
      console.log(data);
      if (res.status === 201) {
        alert("User created successfully!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred while signing up. Please try again.");
    }
  };
  return { signUp };
};

export default useSignUp;
