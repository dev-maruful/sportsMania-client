import React from "react";

const InstructorsCard = ({ image, name, email }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-xl font-semibold">{name}</h2>
        <p className="text-base font-medium">{email}</p>
      </div>
    </div>
  );
};

export default InstructorsCard;
