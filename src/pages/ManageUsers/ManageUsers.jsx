import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageUsers = () => {
  const {} = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  return <div>hello admin, manage users form here</div>;
};

export default ManageUsers;
