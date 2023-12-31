import { useQuery } from "@tanstack/react-query";
import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`).then((data) => {
      if (data?.data?.modifiedCount) {
        refetch();
        toast.success(`${user?.name} is an Admin now!`);
      }
    });
  };

  const handleMakeInstructor = (user) => {
    axiosSecure.patch(`/users/instructor/${user?._id}`).then((data) => {
      if (data?.data?.modifiedCount) {
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
