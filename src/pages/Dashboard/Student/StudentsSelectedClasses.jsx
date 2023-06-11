import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useEffect } from "react";
import StudentsClassCard from "../../../components/StudentsClassCard";
import { toast } from "react-hot-toast";

const StudentsSelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const [studentClasses, setStudentClasses] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`/classes/studentselected?email=${user?.email}`).then(
      (data) => {
        setStudentClasses(data?.data);
      }
    );
  }, [user]);

  const handleDelete = (id) => {
    axiosSecure.delete(`/classes/studentselected/${id}`).then((data) => {
      if (data?.data?.deletedCount > 0) {
        toast.success("Class deleted successfully");
        const remainingClasses = studentClasses.filter(
          (remainingClass) => remainingClass._id !== id
        );
        setStudentClasses(remainingClasses);
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <SectionTitle header="My Selected Classes"></SectionTitle>
      <div className="grid grid-cols-3 gap-10">
        {studentClasses.map((singleClass) => (
          <StudentsClassCard
            key={singleClass?._id}
            id={singleClass?._id}
            className={singleClass?.className}
            instructorName={singleClass?.instructorName}
            price={singleClass?.price}
            availableSeats={singleClass?.seats}
            picture={singleClass?.photo}
            handleDelete={handleDelete}
          ></StudentsClassCard>
        ))}
      </div>
    </div>
  );
};

export default StudentsSelectedClasses;
