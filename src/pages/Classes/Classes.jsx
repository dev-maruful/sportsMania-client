import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import InstructorClassCard from "../../components/InstructorClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/classes/approvedclasses").then((data) => {
      setClasses(data?.data);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <SectionTitle header="All Classes"></SectionTitle>
      <div>
        {classes.map((singleClass) => (
          <InstructorClassCard
            key={singleClass?._id}
            name={singleClass?.className}
            photo={singleClass?.classImage}
            price={singleClass?.price}
            seats={singleClass?.seats}
            instructorName={singleClass?.instructorName}
          ></InstructorClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
