import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Instructors from "../pages/Dashboard/Instructors/Instructors";
import AddAClass from "../pages/Dashboard/Instructors/AddAClass";
import InstructorClasses from "../pages/Dashboard/Instructors/InstructorClasses";
import SendFeedback from "../pages/SendFeedback/SendFeedback";

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
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/dashboard/manageclasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "/dashboard/manageclasses/sendfeedback",
        element: <SendFeedback></SendFeedback>,
      },
      {
        path: "/dashboard/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/addaclass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "/dashboard/instructorclasses",
        element: <InstructorClasses></InstructorClasses>,
      },
    ],
  },
]);
