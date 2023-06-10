import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import ClassCard from "../../components/ClassCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/users/instructors").then((data) => {
      setInstructors(data?.data);
    });
  }, []);

  return (
    <div className="mb-32">
      <SectionTitle header="Our Popular Instructors"></SectionTitle>
      <div className="grid md:grid-cols-3 gap-8 mx-5 md:mx-0">
        {instructors.slice(0, 6).map((instructor) => (
          <ClassCard
            key={instructor?._id}
            name={instructor?.name}
            picture={instructor?.photo}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
