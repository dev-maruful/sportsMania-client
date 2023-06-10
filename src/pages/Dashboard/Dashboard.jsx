import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`/users/${user?.email}`).then((data) => {
      setUserRole(data?.data);
    });
  }, [user]);

  console.log(userRole);

  return (
    <div>
      {userRole?.role === "admin" ? (
        <div className="min-h-[calc(100vh-400px)] flex flex-col justify-center items-center gap-5">
          <SectionTitle header="Admin Dashboard"></SectionTitle>
          <div className="flex justify-center items-center gap-5">
            <Link to="/dashboard/manageclasses">
              <button className="btn btn-primary btn-outline">
                Manage Classes
              </button>
            </Link>
            <Link to="/dashboard/manageusers">
              <button className="btn btn-primary btn-outline">
                Manage Users
              </button>
            </Link>
          </div>
        </div>
      ) : userRole?.role === "instructor" ? (
        <div className="min-h-[calc(100vh-400px)] flex flex-col justify-center items-center gap-5">
          <SectionTitle header="Instructor Dashboard"></SectionTitle>
          <div className="flex justify-center items-center gap-5">
            <Link to="/dashboard/addaclass">
              <button className="btn btn-primary btn-outline">
                Add a class
              </button>
            </Link>
            <Link to="/dashboard/instructorclasses">
              <button className="btn btn-primary btn-outline">
                My classes
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-400px)] flex flex-col justify-center items-center gap-5">
          <SectionTitle header="Student Dashboard"></SectionTitle>
          <div className="flex justify-center items-center gap-5">
            <button className="btn btn-primary btn-outline">
              My selected classes
            </button>
            <button className="btn btn-primary btn-outline">
              My enrolled classes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
