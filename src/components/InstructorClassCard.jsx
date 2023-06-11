import React from "react";

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
          {seats && (
            <p className="text-base font-medium">Available seats : {seats}</p>
          )}
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
            <button className="btn btn-primary btn-outline">
              {seats ? "select" : "update"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorClassCard;
