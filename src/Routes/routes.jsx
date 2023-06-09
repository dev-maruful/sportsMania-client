import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageClasses from "../pages/ManageClasses/ManageClasses";
import ManageUsers from "../pages/ManageUsers/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/manageclasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "/dashboard/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
