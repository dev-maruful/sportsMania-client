import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import InstructorClassCard from "../../../components/InstructorClassCard";

const InstructorClasses = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axiosSecure(`/classes?email=${user?.email}`).then((data) => {
      setClasses(data?.data);
    });
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <SectionTitle header="My Classes"></SectionTitle>
      <div>
        {classes.map((singleClass) => (
          <InstructorClassCard
            key={singleClass._id}
            name={singleClass?.className}
            photo={singleClass?.classImage}
            enrolledStudents={singleClass?.enrolledStudents}
            price={singleClass?.price}
            status={singleClass?.status}
            feedback={singleClass?.feedback}
          ></InstructorClassCard>
        ))}
      </div>
    </div>
  );
};

export default InstructorClasses;
