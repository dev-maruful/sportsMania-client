import React from "react";

const ClassCard = ({ name, picture, numStudents, availableSeats }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-lg font-medium">Number of students: {numStudents}</p>
        <p className="text-lg font-medium">Available seats: {availableSeats}</p>
        <div className="card-actions">
          <button className="btn btn-primary btn-outline">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
