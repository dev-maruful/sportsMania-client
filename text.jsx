/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const ClassManageCard = ({ instructor, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const { className, email, price, seat, status, image, name, _id } =
    instructor;
  const [showModal, setShowModal] = useState(false);
  const [sendFeedBack, setSendFeedBack] = useState("");

  const handleApprovedButton = (id) => {
    axiosSecure.patch(`/approvedinstructors/admin/${id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire("Good job!", "You clicked the button!", "success");
      }
      axiosSecure.post("/classes", instructor).then((res) => {
        if (res.data.insertedId) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
      });
    });
  };

  const handleDeniedButton = (id) => {
    axiosSecure.patch(`/deniedinstructors/admin/${id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire("Good job!", "You clicked the button!", "success");
      }
    });
  };

  const handleFeedbackButton = (id) => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const saveFeedBack = (event) => {
    const value = event.target.value;
    setSendFeedBack(value);
  };

  const handleSendFeedBack = (id) => {
    axiosSecure
      .patch(`/feedback/admin/${id}`, {
        feedback: sendFeedBack,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto mb-7">
      <div className="card card-side bg-base-100 shadow-2xl">
        <figure>
          <img
            className="rounded-md h-[300px] w-[530px] ml-4"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2>
            <span className="text-[green] text-2xl">Name:</span>{" "}
            <span className="text-xl font-bold text-black">{name}</span>
          </h2>
          <h2>
            <span className="text-[green] text-2xl">Email:</span>{" "}
            <span className="text-xl font-bold text-black">{email}</span>
          </h2>
          <p>
            <span className="font-bold text-[green] text-2xl">Class:</span>{" "}
            <span className="text-xl font-bold text-black">{className}</span>
          </p>
          <div className="flex">
            <p>
              <span className="font-bold text-[green] text-2xl">Seat:</span>{" "}
              <span className="text-xl font-bold text-black">{seat}</span>
            </p>
            <p>
              <span className="font-bold text-[green] text-2xl">Price:</span>{" "}
              <span className="text-xl font-bold text-black">{price}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleApprovedButton(_id)}
              className="btn btn-info"
              disabled={status === "approved"}
            >
              Approved
            </button>
            <button
              onClick={() => handleDeniedButton(_id)}
              className="btn btn-error"
              disabled={status === "denied"}
            >
              Denied
            </button>
            <button className="btn" onClick={() => handleFeedbackButton(_id)}>
              Open Modal
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <dialog open className="modal">
          <form method="dialog" className="modal-box">
            <input
              onBlur={saveFeedBack}
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />
            <div className="modal-action">
              <button className="btn" onClick={handleCloseModal}>
                Close
              </button>
              <button
                onClick={() => handleSendFeedBack(_id)}
                disabled={!sendFeedBack}
              >
                Send FeedBack
              </button>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default ClassManageCard;
