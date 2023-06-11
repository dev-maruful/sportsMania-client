import React from "react";

const ManageClassesCard = ({
  id,
  classImage,
  className,
  instructorName,
  instructorEmail,
  availableSeats,
  price,
  status,
  handleApprove,
}) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl max-w-6xl mb-5">
      <figure className="w-1/2">
        <img src={classImage} alt="" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title text-2xl font-bold">
          Class Name : {className}
        </h2>
        <p className="text-lg font-medium">
          Instructor Name : {instructorName}
        </p>
        <p className="text-base font-medium">
          Instructor Email : {instructorEmail}
        </p>
        <p className="text-base font-medium">
          Available Seats : {availableSeats}
        </p>
        <p className="text-base font-medium">Price : ${price}</p>
        <p className="text-base font-medium">
          Status :{" "}
          <span
            className={`${status === "approved" && "text-success font-bold"}`}
          >
            {status}
          </span>
        </p>
        <div className="flex gap-5 items-center">
          <div className="card-actions">
            <button
              disabled={status === "approved"}
              onClick={() => handleApprove(id)}
              className="btn btn-success"
            >
              Approve
            </button>
          </div>
          <div className="card-actions">
            <button disabled={status === "approved"} className="btn btn-error">
              Deny
            </button>
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
