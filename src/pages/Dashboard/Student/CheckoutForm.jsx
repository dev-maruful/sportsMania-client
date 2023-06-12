import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ price, className, id, instructorName, image }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axiosSecure("/classes/approvedclasses").then((data) => {
      setClasses(data?.data);
    });
  }, []);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      toast.success("Payment successful");
      setTransactionId(paymentIntent.id);

      const updatedSeat = classes.map((cls) => {
        if (cls.className === className) {
          axiosSecure
            .put(`/classes/approved/${className}`, {
              availableSeats: cls.availableSeats - 1,
              enrolled: cls.enrolled + 1,
            })
            .then((data) => {});
        }
      });
      setClasses(updatedSeat);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        classId: id,
        price,
        date: new Date(),
        className,
        instructorName,
        image,
        status: "service pending",
      };
      axiosSecure.post("/payments", payment).then((data) => {
        if (data.data.insertedId) {
          //   toast.success("Payment details saved in server");
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center mt-10 mb-20">
          <button
            className="btn btn-primary btn-sm"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {transactionId && (
        <div className="text-center">
          <p className="text-success text-lg font-bold">
            Payment completed with transactionID: {transactionId}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
