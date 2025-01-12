import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Stays from "./pages/stays/Stays";
import Flights from "./pages/flights/Flights";
import CarRentals from "./pages/carRentals/CarRentals";
import Attractions from "./pages/attractions/Attractions";
import AirportTaxis from "./pages/airportTaxis/AirportTaxis";
import Reservation from "./pages/reservation/Reservation";
import Availability from "./pages/availability/Availability";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/car-rentals" element={<CarRentals />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/airport-taxis" element={<AirportTaxis />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/availability" element={<Availability />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;