import React from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle";
import InstructorsCard from "../../../components/InstructorsCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/users/instructors").then((data) => {
      setInstructors(data?.data);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        header={`All Instructors : ${instructors.length}`}
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-10 mb-20">
        {instructors.map((instructor) => (
          <InstructorsCard
            key={instructor?._id}
            image={instructor?.photo}
            name={instructor?.name}
            email={instructor?.email}
          ></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
