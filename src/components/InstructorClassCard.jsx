import React from "react";

const InstructorClassCard = ({
  name,
  photo,
  status,
  enrolledStudents,
  price,
  feedback,
}) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-5 max-w-5xl mx-auto">
      <figure className="w-1/2">
        <img src={photo} alt="" />
      </figure>
      <div className="card-body w-1/2">
        <div className="flex flex-col gap-2">
          <h2 className="card-title text-xl font-bold">{name}</h2>
          <p className="text-base font-medium">Status : {status}</p>
          <p className="text-base font-medium">Price : ${price}</p>
          <p className="text-base font-medium">
            Total enrolled Students : {enrolledStudents ? enrolledStudents : 0}
          </p>
          <p className="text-base font-medium">
            Feedback : {feedback ? feedback : "No feedback"}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary btn-outline">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorClassCard;
