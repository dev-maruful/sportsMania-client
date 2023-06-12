import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  if (loading) {
    return (
      <div className="h-full pt-24 flex justify-center items-center">
        <ScaleLoader
          color="blue"
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (user && isAdmin !== "admin" && isInstructor !== "instructor") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
