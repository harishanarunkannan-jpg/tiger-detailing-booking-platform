import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink className="brand" to="/">
          TIGER DETAILING
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booking">Book Appointment</NavLink>
          <NavLink to="/bookings">My Bookings</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;