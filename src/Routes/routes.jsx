import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Instructors from "../pages/Dashboard/Instructor/Instructors";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass";
import InstructorClasses from "../pages/Dashboard/Instructor/InstructorClasses";
import Classes from "../pages/Classes/Classes";
import StudentsSelectedClasses from "../pages/Dashboard/Student/StudentsSelectedClasses";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/Dashboard/Student/Payment";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";

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
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "/dashboard/manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageusers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addaclass",
        element: (
          <InstructorRoute>
            <AddAClass></AddAClass>
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/instructorclasses",
        element: (
          <InstructorRoute>
            <InstructorClasses></InstructorClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/studentsclasses",
        element: (
          <PrivateRoute>
            <StudentsSelectedClasses></StudentsSelectedClasses>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/enrolledclasses",
        element: (
          <PrivateRoute>
            <EnrolledClasses></EnrolledClasses>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/enrolledclasses/paymenthistory",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
