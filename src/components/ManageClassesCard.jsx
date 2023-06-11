import React from "react";

const ManageClassesCard = ({
  classImage,
  className,
  instructorName,
  instructorEmail,
  availableSeats,
  price,
  status,
}) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl max-w-6xl mb-5">
      <figure className="w-1/2">
        <img src={classImage} alt="" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title">Class Name : {className}</h2>
        <p>Instructor Name : {instructorName}</p>
        <p>Instructor Email : {instructorEmail}</p>
        <p>Available Seats : {availableSeats}</p>
        <p>Price : ${price}</p>
        <p>Status : {status}</p>
        <div className="flex gap-5">
          <div className="card-actions">
            <button className="btn btn-success">Approve</button>
          </div>
          <div className="card-actions">
            <button className="btn btn-error">Deny</button>
          </div>
          <div className="card-actions">
            <button className="btn btn-warning">Send Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClassesCard;
