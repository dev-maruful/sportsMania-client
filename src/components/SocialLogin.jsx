import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";
import axios from "axios";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        const saveUser = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photo: result?.user?.photoURL,
        };

        axios
          .post("http://localhost:5000/users", saveUser)
          .then((data) => {
            data?.data.insertedId &&
              toast.success("User logged in successfully");
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
