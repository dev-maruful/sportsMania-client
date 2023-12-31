import React from "react";

const ClassCard = ({
  name,
  picture,
  numStudents,
  availableSeats,
  subHeading,
}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={picture} alt="" />
      </figure>
      <div className="card-body flex items-center">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        {numStudents && (
          <p className="text-lg font-medium">
            Number of students: {numStudents ? numStudents : 0}
          </p>
        )}
        {availableSeats && (
          <p className="text-lg font-medium">
            Available seats: {availableSeats}
          </p>
        )}
        {subHeading && <p className="text-lg font-medium">{subHeading}</p>}
      </div>
    </div>
  );
};

export default ClassCard;
