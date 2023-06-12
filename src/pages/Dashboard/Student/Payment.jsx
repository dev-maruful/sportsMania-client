import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_PK}`);

const Payment = () => {
  const location = useLocation();
  const paymentDetails = location.state;
  const className = paymentDetails?.className;
  const amount = paymentDetails?.price;
  const price = parseFloat(amount.toFixed(2));
  const id = paymentDetails?.id;
  const instructorName = paymentDetails?.instructorName;
  const image = paymentDetails?.picture;

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <SectionTitle header="Please Pay"></SectionTitle>
      <h3 className="text-center text-xl font-semibold">
        Pay for : <span className="text-success">{className}</span>
      </h3>
      <h3 className="text-center text-xl font-semibold">
        Total amount : <span className="text-success">${price}</span>
      </h3>
      <div className="max-w-sm mx-auto mt-16">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            price={price}
            className={className}
            id={id}
            instructorName={instructorName}
            image={image}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
