import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle";
import ManageClassesCard from "../../../../components/ManageClassesCard";
import { toast } from "react-hot-toast";

const ManageClasses = () => {
  const axiosSecure = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure("/classes");
    return res.data;
  });

  const handleApprove = (id) => {
    axiosSecure.patch(`/classes/approved/${id}`).then((data) => {
      if (data?.data?.modifiedCount) {
        refetch();
        toast.success(`Class approved successfully`);
      }
    });
  };

  const handleDeny = (id) => {
    axiosSecure.patch(`/classes/denied/${id}`).then((data) => {
      if (data?.data?.modifiedCount) {
        refetch();
        toast.success(`Class denied successfully`);
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center mb-20">
      <SectionTitle header="Manage Classes"></SectionTitle>
      <div>
        {classes.map((singleClass) => (
          <ManageClassesCard
            key={singleClass?._id}
            id={singleClass?._id}
            classImage={singleClass?.classImage}
            className={singleClass?.className}
            instructorName={singleClass?.instructorName}
            instructorEmail={singleClass?.instructorEmail}
            price={singleClass?.price}
            availableSeats={singleClass?.seats}
            status={singleClass?.status}
            handleApprove={handleApprove}
            handleDeny={handleDeny}
          ></ManageClassesCard>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
