import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useLocation } from "react-router-dom";
import moment from "moment/moment.js";

const PaymentHistory = () => {
  const location = useLocation();
  const enrolledClasses = location.state;
  console.log(enrolledClasses);

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <SectionTitle
        header={`All Payments : ${enrolledClasses.length}`}
      ></SectionTitle>
      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Payment for</th>
              <th className="text-lg">TransactionId</th>
              <th className="text-lg">Payment date and time</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((enrolledClass, index) => (
              <tr key={enrolledClass._id}>
                <th>{index + 1}</th>
                <td className="text-base font-medium">
                  {enrolledClass?.className}
                </td>
                <td className="text-base font-medium">
                  {enrolledClass?.transactionId}
                </td>
                <td className="text-base font-medium">
                  {moment(`${enrolledClass?.date}`).format(
                    "MMMM Do, YYYY, h:mm:ss A"
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

export default PaymentHistory;
