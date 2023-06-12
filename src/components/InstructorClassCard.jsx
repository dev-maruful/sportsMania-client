import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const InstructorClassCard = ({
  name,
  photo,
  status,
  enrolledStudents,
  price,
  feedback,
  instructorName,
  seats,
}) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handleSelectClass = () => {
    const selectedClass = {
      studentName: user?.displayName,
      studentEmail: user?.email,
      className: name,
      photo,
      instructorName,
      price,
      seats,
    };

    axiosSecure.post(`/classes/studentselected`, selectedClass).then((data) => {
      if (data?.data?.insertedId) {
        toast.success("Class selected successfully");
      } else if (data?.data?.message === "Class already selected") {
        toast.error(data?.data?.message);
      }
    });
  };

  return (
    <div
      className={`card card-side bg-base-100 ${
        seats === 0 && "bg-red-600"
      } shadow-xl mb-5 max-w-5xl mx-auto`}
    >
      <figure className="w-1/2">
        <img src={photo} alt="" />
      </figure>
      <div className="card-body w-1/2">
        <div className="flex flex-col gap-2">
          <h2 className="card-title text-xl font-bold">Class name : {name}</h2>
          {instructorName && (
            <p className="text-lg font-semibold">
              Instructor name : {instructorName}
            </p>
          )}
          <p className="text-base font-medium">Available seats : {seats}</p>
          {status && (
            <p className="text-base font-medium">
              Status :{" "}
              <span
                className={`${
                  status === "approved"
                    ? "text-success font-bold"
                    : status === "denied"
                    ? "text-error font-bold"
                    : ""
                }`}
              >
                {status}
              </span>
            </p>
          )}
          <p className="text-base font-medium">Price : ${price}</p>
          <p className="text-base font-medium">
            Total enrolled Students : {enrolledStudents ? enrolledStudents : 0}
          </p>
          {status === "denied" && (
            <p className="text-base font-medium">
              Feedback :{" "}
              {feedback && status === "denied" ? feedback : "No feedback"}
            </p>
          )}
          <div className="card-actions">
            {isInstructor !== "instructor" && (
              <button
                disabled={
                  seats === 0 ||
                  isAdmin === "admin" ||
                  isInstructor === "instructor"
                }
                onClick={handleSelectClass}
                className="btn btn-primary btn-outline"
              >
                select
              </button>
            )}
            {isInstructor === "instructor" && (
              <button className="btn btn-primary btn-outline">update</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorClassCard;
