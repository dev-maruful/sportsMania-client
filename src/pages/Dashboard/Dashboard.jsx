import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // TODO: load data from server to verify admin and instructor
  const isInstructor = false;
  const isAdmin = true;

  return (
    <div>
      {isAdmin ? (
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
      ) : isInstructor ? (
        <div className="min-h-[calc(100vh-400px)] flex flex-col justify-center items-center gap-5">
          <SectionTitle header="Instructor Dashboard"></SectionTitle>
          <div className="flex justify-center items-center gap-5">
            <button className="btn btn-primary btn-outline">Add a class</button>
            <button className="btn btn-primary btn-outline">My classes</button>
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
