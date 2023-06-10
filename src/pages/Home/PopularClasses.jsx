import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ClassCard from "../../components/ClassCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/classes").then((data) => {
      setClasses(data?.data);
    });
  }, []);

  return (
    <div className="mb-32">
      <SectionTitle header="Popular Classes"></SectionTitle>
      <div className="grid md:grid-cols-3 gap-8 mx-5 md:mx-0">
        {classes.slice(0, 6).map((singleClass) => (
          <ClassCard
            key={singleClass?._id}
            name={singleClass?.className}
            picture={singleClass?.classImage}
            numStudents={singleClass?.numStudents}
            availableSeats={singleClass?.seats}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
