import { useDispatch, useSelector } from "react-redux";
import { slicelogout, emailVerified } from "../store/slice/authSlice";
const useVerifyOtp = () => {
    const {token} = useSelector((e) => e.auth);
    const dispatch = useDispatch();
    const verifyOtp = async (otp) => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/verifyOtp`, {
          method: 'POST',
          body: JSON.stringify({ otp}),
          headers: {
            'Content-Type': 'application/json',
             authorization: "Bearer " + token,
          },
        });
        const data = await response.json();
        if(data.message === "Token não informado!"){
            dispatch(slicelogout);
        }else if(data.status === "success"){
            dispatch(emailVerified());
        }else{
            alert(data.message);
        }
      } catch (err) {
        console.error("Error verifying OTP:", err);
        alert("An error occurred while verifying OTP.");
      }
    };
  
    return { verifyOtp };
  };
  
  export default useVerifyOtp;
  