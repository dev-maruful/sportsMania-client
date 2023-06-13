import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/84918-404-error-doodle-animation.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="h-48 w-44">
          <Lottie animationData={errorAnimation} loop={true} />
        </div>
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-error">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-error mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn btn-outline btn-primary">
            <FaHome></FaHome> Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
