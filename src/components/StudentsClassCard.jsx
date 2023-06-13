import React from "react";
import { FaCcMastercard, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentsClassCard = ({
  className,
  instructorName,
  picture,
  availableSeats,
  price,
  id,
  handleDelete,
}) => {
  const paymentDetails = { className, price, id, instructorName, picture };

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
              <FaTrashAlt></FaTrashAlt> Delete
            </button>
          </div>
          <div>
            <Link to="/dashboard/payment" state={paymentDetails}>
              <button className="btn btn-success btn-outline">
                <FaCcMastercard></FaCcMastercard> pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsClassCard;
