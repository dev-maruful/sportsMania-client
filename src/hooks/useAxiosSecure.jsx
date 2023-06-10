import axios from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_baseURL}`,
});

const useAxiosSecure = () => {
  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          <Navigate to="/login"></Navigate>;
        }
        return Promise.reject(error);
      }
    );
  }, [logout, Navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
