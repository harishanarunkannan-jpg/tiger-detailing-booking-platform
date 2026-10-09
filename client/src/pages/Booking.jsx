import { useState } from "react";

function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(`${date}T00:00:00`);

    if (selectedDate < today) {
      setMessage("Please choose a future date.");
      setMessageType("error");
      return;
    }

    const booking = {
      name,
      email,
      service,
      date,
      time,
    };

    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Unable to create booking.");
        setMessageType("error");
        return;
      }

      setMessage("Booking submitted successfully!");
      setMessageType("success");

      setName("");
      setEmail("");
      setService("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error(error);

      setMessage("Unable to connect to the server.");
      setMessageType("error");
    }
  }

  const todayString = new Date().toISOString().split("T")[0];

  return (
    <div className="page">
      <div className="page-title">
        <h1>Book an Appointment</h1>
        <p>Choose your detailing service, date, and preferred time.</p>
      </div>

      <div className="booking-wrapper">
        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Service</label>

            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
            >
              <option value="">Select a Service</option>
              <option value="Exterior Detail">
                Exterior Detail - $30
              </option>
              <option value="Interior Detail">
                Interior Detail - $45
              </option>
              <option value="Full Detail">
                Full Detail - $70
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>

            <input
              type="date"
              min={todayString}
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>

            <input
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              required
            />
          </div>

          <button className="primary-btn" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;