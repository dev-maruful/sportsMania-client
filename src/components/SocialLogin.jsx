import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const saveUser = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photo: result?.user?.photoURL,
        };

        axiosSecure
          .post("/users", saveUser)
          .then((data) => {
            if (data?.data?.insertedId || data?.data?.message) {
              toast.success("User logged in successfully");
              navigate(from, { replace: true });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="flex justify-center mb-8">
      <button onClick={handleGoogleLogin} className="btn btn-wide">
        Login with <img className="h-5 w-5" src="/googleLogo.png" alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;
