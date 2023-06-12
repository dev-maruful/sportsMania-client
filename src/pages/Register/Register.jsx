import React, { useContext } from "react";
import SocialLogin from "../../components/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data?.password !== data?.confirmPass) {
      return toast.error("Password and confirm password do not match");
    }

    createUser(data?.email, data?.password).then((result) => {
      const loggedUser = result?.user;

      updateUserProfile(data?.name, data?.photoURL)
        .then(() => {
          const saveUser = {
            name: data?.name,
            email: data?.email,
            photo: data?.photoURL,
          };

          axios
            .post("http://localhost:5000/users", saveUser)
            .then((data) => {
              data?.data.insertedId &&
                toast.success("User created successfully");
              navigate("/");
            })
            .catch((err) => {
              console.log(err);
              toast.error(err.code);
            });
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.code);
        });
    });
  };

  return (
    <div className="hero p-10 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Here!</h1>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Name</span>
              </label>
              <input
                {...register("name", { maxLength: 50 })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name?.type === "maxLength" && (
                <p className="text-error" role="alert">
                  Name's maximum Length is 50 characters
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p className="text-error" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="flex gap-5">
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                  })}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-error" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-error" role="alert">
                    Password must be at least 6 characters long
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-error" role="alert">
                    Password must be include at least one capital letter and one
                    special character
                  </p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Confirm Password
                  </span>
                </label>
                <input
                  {...register("confirmPass", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                  })}
                  type="text"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                {errors.password?.type === "pattern" && (
                  <p className="text-error" role="alert">
                    Password must be include at least one capital letter and one
                    special character
                  </p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Photo URL
                </span>
              </label>
              <input
                {...register("photoURL", { required: true, maxLength: 2000 })}
                type="text"
                placeholder="photo url"
                className="input input-bordered"
              />
              {errors.photoURL?.type === "required" && (
                <p className="text-error" role="alert">
                  Photo URL is required
                </p>
              )}
            </div>
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login">
                <span className="link font-medium">Login now</span>
              </Link>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
