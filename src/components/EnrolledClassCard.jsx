import React from "react";

const EnrolledClassCard = ({
  image,
  className,
  instructorName,
  price,
  transactionId,
}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Class name : {className}</h2>
        <h3 className="text-xl font-semibold">
          Instructor name : {instructorName}
        </h3>
        <p className="text-lg font-medium">
          TransactionID : <br />
          <span className="text-success">{transactionId}</span>
        </p>
        <p className="text-lg font-medium">Price : ${price}</p>
      </div>
    </div>
  );
};

export default EnrolledClassCard;
