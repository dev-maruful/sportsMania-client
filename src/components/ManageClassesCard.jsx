import React from "react";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

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
  handleDeny,
}) => {
  const [modal, setModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleShowModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleFeedback = (event) => {
    const value = event.target.value;
    setFeedback(value);
  };

  const handleSendFeedback = (id) => {
    axiosSecure
      .patch(`/classes/feedback/${id}`, {
        feedback: feedback,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Feedback sent successfully");
        }
      });
  };

  return (
    <div className="max-w-6xl">
      <div className="card card-side bg-base-100 shadow-xl mb-5">
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
          <div className="flex gap-5 items-center">
            <div className="card-actions">
              <button
                disabled={status === "approved" || status === "denied"}
                onClick={() => handleApprove(id)}
                className="btn btn-success"
              >
                Approve
              </button>
            </div>
            <div className="card-actions">
              <button
                onClick={() => handleDeny(id)}
                disabled={status === "approved" || status === "denied"}
                className="btn btn-error"
              >
                Deny
              </button>
            </div>
            <div className="card-actions">
              <button onClick={handleShowModal} className="btn btn-warning">
                send feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <dialog open className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="text-2xl font-bold mb-5">Write feedback</h3>
            <textarea
              onBlur={handleFeedback}
              placeholder="write here..."
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
            <div className="modal-action">
              <button
                className="btn btn-success"
                onClick={() => handleSendFeedback(id)}
              >
                Send FeedBack
              </button>
              <button className="btn btn-error" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default ManageClassesCard;
