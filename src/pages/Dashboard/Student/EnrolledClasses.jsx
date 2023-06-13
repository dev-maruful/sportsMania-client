import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import EnrolledClassCard from "../../../components/EnrolledClassCard";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

const EnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    axiosSecure(`/classes/enrolledclasses?email=${user?.email}`).then(
      (data) => {
        setEnrolledClasses(data?.data);
      }
    );
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <SectionTitle
        header={`My Enrolled Classes : ${enrolledClasses.length}`}
      ></SectionTitle>
      <div className="text-end mb-10">
        <Link
          to="/dashboard/enrolledclasses/paymenthistory"
          state={enrolledClasses}
        >
          <button className="btn btn-primary btn-outline">
            <FaHistory></FaHistory> payment history
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {enrolledClasses.map((enrolledClass) => (
          <EnrolledClassCard
            key={enrolledClass?._id}
            image={enrolledClass?.image}
            className={enrolledClass?.className}
            transactionId={enrolledClass.transactionId}
            price={enrolledClass?.price}
            instructorName={enrolledClass?.instructorName}
          ></EnrolledClassCard>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClasses;
