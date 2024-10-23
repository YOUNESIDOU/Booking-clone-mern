// src/components/HotelCard.jsx
import React from "react";
import "./hotelCard.css"; // Optional: Create a CSS file for styling

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <h2>{hotel.name}</h2>
      <div className="hotel-photos">
        {hotel.photos.map((photo, index) => (
          <img key={index} src={require(`../../assets/${photo}`)} alt={hotel.name} />
        ))}
      </div>
      <p>{hotel.desc}</p>
      <p>Rating: {hotel.rating}</p>
      <p>Cheapest Price: ${hotel.cheapestPrice}</p>
    </div>
  );
};

export default HotelCard;