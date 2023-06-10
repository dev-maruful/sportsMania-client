import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";
import ClassCard from "../../components/ClassCard";

const NatureActivities = () => {
  const [natures, setNatures] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/nature").then((data) => {
      setNatures(data?.data);
    });
  }, []);
  console.log(natures);

  return (
    <div className="mb-32">
      <SectionTitle header="Nature Activities"></SectionTitle>
      <div className="grid md:grid-cols-3 gap-8 mx-5 md:mx-0">
        {natures.slice(0, 6).map((nature) => (
          <ClassCard
            key={nature?._id}
            name={nature?.heading}
            picture={nature?.image}
            subHeading={nature?.subheading}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default NatureActivities;
