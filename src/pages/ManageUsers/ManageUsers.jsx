import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { toast } from "react-hot-toast";

const ManageUsers = () => {
  const [admin, setAdmin] = useState(false);
  const [instructor, setInstructor] = useState(false);
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setAdmin(true);
          setInstructor(false);
          refetch();
          toast.success(`${user?.name} is an Admin now!`);
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setInstructor(true);
          setAdmin(false);
          refetch();
          toast.success(`${user?.name} is an Instructor now!`);
        }
      });
  };

  return (
    <div className="flex flex-col items-center">
      <SectionTitle header={`Total Users : ${users.length}`}></SectionTitle>
      <div className="overflow-x-auto w-full max-w-4xl mb-32">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Action</th>
              <th className="text-xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th className="text-base">{index + 1}</th>
                <td className="text-base">{user?.name}</td>
                <td className="text-base">{user?.email}</td>
                <td className="text-base">
                  {user?.role === "instructor" ? (
                    "Instructor"
                  ) : (
                    <button
                      disabled={instructor}
                      onClick={() => handleMakeInstructor(user)}
                      className={`btn btn-primary btn-outline
                      }`}
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
                <td className="text-base">
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      disabled={admin}
                      onClick={() => handleMakeAdmin(user)}
                      className={`btn btn-primary btn-outline
                      }`}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
