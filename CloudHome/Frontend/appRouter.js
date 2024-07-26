import React from "react";
import LoginPage from "./src/pages/loginPage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignupPage from "./src/pages/signupPage";
import HomePage from "./src/pages/homePage";
import { useSelector } from "react-redux";
import OtpPage from "./src/pages/otpPage";
import AboutPage from "./src/pages/aboutPage";

const AppRouter = () => {
  const { isAuthorized, isEmailVerified } = useSelector((e) => e.auth);
  const router = createBrowserRouter([
    {
      path: "/",
      // element:<HomePage />,
      element: isAuthorized ? (
        <>
          {isEmailVerified ? <HomePage /> : <Navigate to="/otp-verification/"/>}
        </>
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/login",
      element: isAuthorized ? <Navigate to="/" /> : <LoginPage />,
    },
    {
      path: "/signup",
      element: isAuthorized ? <Navigate to="/" /> : <SignupPage />,
    },
    {
      path: "/otp-verification",
      element:
        isAuthorized && !isEmailVerified ? <OtpPage /> : <Navigate to="/" />,
    },
    {
        path: "/about",
        element: <AboutPage/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
