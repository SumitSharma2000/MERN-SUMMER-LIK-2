import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./src/pages/loginPage";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import SignupPage from "./src/pages/signupPage";
import HomePage from "./src/pages/homePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
  ]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
};

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App />);