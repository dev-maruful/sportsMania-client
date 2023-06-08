import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const [hide, setHide] = useState(true);

  return (
    <div className="hero p-10 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg font-medium">Password</span>
              </label>
              <input
                type={hide ? "password" : "text"}
                placeholder="password"
                className="input input-bordered"
              />
              <div
                onClick={() => setHide(!hide)}
                className="absolute right-4 bottom-4 cursor-pointer"
              >
                {hide ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </div>
            </div>
            <p className="text-sm">
              New to SportsMania?{" "}
              <Link to="/register">
                <span className="link font-medium">Register Here</span>
              </Link>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
