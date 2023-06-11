import React from "react";

const StudentsClassCard = ({
  className,
  instructorName,
  picture,
  availableSeats,
  price,
  id,
  handleDelete,
}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{className}</h2>
        <p className="text-lg font-medium">
          Instructor name : {instructorName}
        </p>
        <p className="text-lg font-medium">Price : ${price}</p>
        <p className="text-lg font-medium">Available seats: {availableSeats}</p>
        <div className="flex gap-5 justify-end">
          <div>
            <button
              onClick={() => handleDelete(id)}
              className="btn btn-error btn-outline"
            >
              Delete
            </button>
          </div>
          <div>
            <button className="btn btn-success btn-outline">pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsClassCard;
