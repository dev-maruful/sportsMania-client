import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle";
import ManageClassesCard from "../../../../components/ManageClassesCard";

const ManageClasses = () => {
  const axiosSecure = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure("/classes");
    return res.data;
  });
  console.log(classes);

  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center mb-20">
      <SectionTitle header="Manage Classes"></SectionTitle>
      <div>
        {classes.map((singleClass) => (
          <ManageClassesCard
            key={singleClass._id}
            classImage={singleClass?.classImage}
            className={singleClass?.className}
            instructorName={singleClass?.instructorName}
            instructorEmail={singleClass?.instructorEmail}
            price={singleClass?.price}
            availableSeats={singleClass?.seats}
            status={singleClass?.status}
          ></ManageClassesCard>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
