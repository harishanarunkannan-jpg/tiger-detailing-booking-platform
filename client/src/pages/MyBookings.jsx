import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editService, setEditService] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");

  async function fetchBookings() {
    try {
      const response = await fetch("http://localhost:3000/api/bookings");

      const data = await response.json();

      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  async function cancelBooking(id) {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/bookings/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Booking cancelled successfully!");

      fetchBookings();
    } catch (error) {
      console.error("Error cancelling booking:", error);

      alert("Something went wrong while cancelling the booking.");
    }
  }

  function startEditing(booking) {
    setEditingId(booking.id);

    setEditService(booking.service);

    const formattedDate = booking.date.split("T")[0];
    setEditDate(formattedDate);

    setEditTime(booking.time);
  }

  async function saveChanges(id) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/bookings/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service: editService,
            date: editDate,
            time: editTime,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Booking updated successfully!");

      setEditingId(null);

      fetchBookings();
    } catch (error) {
      console.error("Error updating booking:", error);

      alert("Something went wrong while updating the booking.");
    }
  }

  return (
    <div className="page">
      <div className="page-title">
        <h1>My Bookings</h1>

        <p>
          View, reschedule, or cancel your detailing appointments.
        </p>
      </div>

      <div className="bookings-list">
        {bookings.length === 0 ? (
          <div className="empty-state">
            <h2>No bookings found</h2>

            <p>
              You currently have no detailing appointments scheduled.
            </p>
          </div>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              {editingId === booking.id ? (
                <div>
                  <h2>Edit Booking</h2>

                  <div className="form-group">
                    <label>Service</label>

                    <select
                      value={editService}
                      onChange={(event) =>
                        setEditService(event.target.value)
                      }
                    >
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
                      value={editDate}
                      onChange={(event) =>
                        setEditDate(event.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Time</label>

                    <input
                      type="time"
                      value={editTime}
                      onChange={(event) =>
                        setEditTime(event.target.value)
                      }
                    />
                  </div>

                  <div className="booking-actions">
                    <button
                      className="save-btn"
                      onClick={() => saveChanges(booking.id)}
                    >
                      Save Changes
                    </button>

                    <button
                      className="secondary-btn"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel Edit
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2>{booking.service}</h2>

                  <p>
                    <strong>Name:</strong> {booking.name}
                  </p>

                  <p>
                    <strong>Email:</strong> {booking.email}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(booking.date).toLocaleDateString()}
                  </p>

                  <p>
                    <strong>Time:</strong> {booking.time}
                  </p>

                  <p>
                    <strong>Status:</strong> {booking.status}
                  </p>

                  <div className="booking-actions">
                    <button
                      className="edit-btn"
                      onClick={() => startEditing(booking)}
                    >
                      Edit Booking
                    </button>

                    <button
                      className="cancel-btn"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyBookings;