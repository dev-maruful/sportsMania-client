import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.enrolled = 0;
    data.availableSeats = parseInt(data.availableSeats);
    const {
      availableSeats,
      classImage,
      className,
      instructorEmail,
      instructorName,
      price,
      enrolled,
    } = data;
    const newData = {
      instructorName: user?.displayName,
      instructorEmail: user?.email,
      className,
      classImage,
      availableSeats: parseInt(availableSeats),
      price: parseFloat(price),
      status: "pending",
      enrolled,
    };
    console.log(newData);

    axiosSecure.post("/classes", newData).then((data) => {
      console.log(data?.data);
      if (data?.data?.insertedId) {
        reset();
        toast.success("Class added successfully!");
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle header="Add A Class"></SectionTitle>
      <div className="hero p-10 pt-0">
        <div className="hero-content flex-col">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Class name
                  </span>
                </label>
                <input
                  {...register("className", { maxLength: 50 })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.className?.type === "maxLength" && (
                  <p className="text-error" role="alert">
                    class name's maximum Length is 50 characters
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Class image
                  </span>
                </label>
                <input
                  {...register("classImage", {
                    required: true,
                    maxLength: 5000,
                  })}
                  type="text"
                  placeholder="Class image"
                  className="input input-bordered"
                />
                {errors.classImage?.type === "required" && (
                  <p className="text-error" role="alert">
                    Class image is required
                  </p>
                )}
              </div>
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Instructor name
                    </span>
                  </label>
                  <input
                    {...register("instructorName")}
                    type="text"
                    defaultValue={user?.displayName}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Instructor email
                    </span>
                  </label>
                  <input
                    {...register("instructorEmail")}
                    type="text"
                    defaultValue={user?.email}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Available seats
                    </span>
                  </label>
                  <input
                    {...register("availableSeats", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Available seats"
                    className="input input-bordered"
                  />
                  {errors.availableSeats?.type === "required" && (
                    <p className="text-error" role="alert">
                      Available seats is required
                    </p>
                  )}
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Price
                    </span>
                  </label>
                  <input
                    {...register("price", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Price"
                    className="input input-bordered"
                  />
                  {errors.price?.type === "required" && (
                    <p className="text-error" role="alert">
                      Price is required
                    </p>
                  )}
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAClass;
