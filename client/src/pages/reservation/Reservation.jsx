import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './reservation.css';

const Reservation = () => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Reservation Payment",
              amount: {
                currency_code: "USD",
                value: 100.00, // Replace with the actual amount
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
        alert("Payment completed successfully!");
      },
      onError: (err) => {
        console.log(err);
        alert("Payment failed. Please try again.");
      },
    }).render(paypal.current);
  }, []);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="reservationContainer">
        <h1>Reservation</h1>
        <div ref={paypal}></div>
      </div>
    </div>
  );
};

export default Reservation;