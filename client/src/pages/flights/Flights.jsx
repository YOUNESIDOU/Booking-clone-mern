import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./flights.css";

const Flights = () => {
  const flights = [
    {
      id: 1,
      airline: "Air France",
      flightNumber: "AF123",
      departure: "Paris (CDG)",
      arrival: "New York (JFK)",
      price: "$500",
    },
    {
      id: 2,
      airline: "Lufthansa",
      flightNumber: "LH456",
      departure: "Berlin (TXL)",
      arrival: "Los Angeles (LAX)",
      price: "$600",
    },
    {
      id: 3,
      airline: "British Airways",
      flightNumber: "BA789",
      departure: "London (LHR)",
      arrival: "Tokyo (NRT)",
      price: "$700",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flightsContainer">
        <h1>Flights</h1>
        <div className="flightsList">
          {flights.map((flight) => (
            <div key={flight.id} className="flightItem">
              <div className="flightDetails">
                <h2>{flight.airline}</h2>
                <p>Flight Number: {flight.flightNumber}</p>
                <p>Departure: {flight.departure}</p>
                <p>Arrival: {flight.arrival}</p>
                <p>Price: {flight.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flights;
