# Booking Application

## Overview

This is a full-stack booking application that allows users to search for hotels, check availability, make reservations, and process payments through PayPal. The project is structured into three main components:

- **API**: Backend logic and database interaction.
- **Client**: User-facing frontend application.
- **Admin**: Admin dashboard for managing the application.

## Features

- **Search Hotels**: Users can search for hotels by destination, dates, and preferences.
- **Room Availability**: Real-time availability checking for rooms(disaled).
- **Reservation Management**: Seamless reservation process with secure PayPal payment integration.
- **Admin Panel**: Admins can manage hotels, rooms, and reservations through the dashboard(disabeld).
- **User Authentication**: Secure login for users to access and manage their bookings.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **Git**

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install Dependencies

#### API (Backend)

```bash
cd api
npm install
```

#### Client (Frontend)

```bash
cd ../client
npm install
```

#### Admin Dashboard

```bash
cd ../admin
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `api` directory and add the necessary configuration:

```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/booking
JWT_SECRET=your_jwt_secret
```


## Running the Application

### 1. Start the Backend Server

```bash
cd api
npm start
```

### 2. Start the Client Application

```bash
cd ../client
npm start
```

### 3. Start the Admin Dashboard

```bash
cd ../admin
npm start
```

### 4. Access the Application

- **Client Application**: `http://localhost:3000`
- **Admin Dashboard**: `http://localhost:3001`

## PayPal Integration

To enable PayPal payments, you must set your own PayPal client ID. Update the following line in `client/public/index.html`:

```html
<script src="https://www.paypal.com/sdk/js?client-id=your_paypal_client_id"></script>
```

Replace `your_paypal_client_id` with the client ID from your PayPal developer account. [PayPal Developer](https://developer.paypal.com/).

## Project Structure

- **api/**: Contains all backend logic, including routes, models, and controllers.
- **client/**: React-based frontend for users to interact with the application.
- **admin/**: React-based admin dashboard for managing data and bookings.


Feel free to modify and use it as needed.

