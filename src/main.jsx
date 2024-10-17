import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./page/register.jsx";
import App from "./App.jsx";
import UserPage from "./page/user.jsx";
import HomePage from "./page/home.jsx";
import TestPage from "./page/test.jsx";
import TestPage2 from "./page/test2.jsx";
import LoginPage from "./page/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/test",
        element: <TestPage />,
      },
      {
        path: "/test2",
        element: <TestPage2 />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
