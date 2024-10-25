# Booking Application

## Overview

This is a booking application that allows users to search for hotels, check availability, and make reservations using PayPal for payment. The application is built using React for the frontend and Node.js for the backend.

## Features

- **Hotel Search**: Users can search for hotels by destination, dates, and options.
- **Availability Check**: Users can check the availability of rooms for selected dates.
- **Reservation**: Users can make reservations and pay using PayPal.
- **User Authentication**: Users can log in to manage their reservations.

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Git

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name

1. Install dependencies for the client (frontend):

   ```bash
   cd client
   npm install

2. Install dependencies for the server (backend):

   ```bash
   cd ../server
   npm install

3. Set up environment variables:

Create a .env file in the server directory.

Add the necessary environment variables (e.g., database connection string, PayPal client ID).

Example .env file:

PORT=5000
DATABASE_URL=mongodb://localhost:27017/booking
PAYPAL_CLIENT_ID=your-paypal-client-id-

### Usage
#### Running the Application

1. Start the server:
   ```bash
   cd server
   npm start

3. Start the client:
   ```bash
   cd ../client
   npm start
Open your browser and navigate to your localhost
