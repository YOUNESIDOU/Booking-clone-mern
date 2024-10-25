import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './availability.css';

const Availability = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="availabilityContainer">
        <h1>Availability</h1>
        <div className="availabilityDetails">
          <p>Check-in: 2023-10-01</p>
          <p>Check-out: 2023-10-05</p>
          <p>Rooms: 2</p>
          <p>Guests: 4</p>
          <p>Total Price: $500</p>
        </div>
      </div>
    </div>
  );
};

export default Availability;