require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((error) => {
  if (error) {
    console.error("Database connection failed:", error);
    return;
  }

  console.log("Connected to MySQL database");
});

app.get("/", (req, res) => {
  res.send("Tiger Detailing backend is running");
});

app.post("/api/bookings", (req, res) => {
  const { name, email, service, date, time } = req.body;

  const sql = `
    INSERT INTO bookings
    (name, email, service, date, time)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, service, date, time],
    (error, result) => {
      if (error) {
        console.error("Error saving booking:", error);

        return res.status(500).json({
          message: "Failed to save booking",
        });
      }

      res.status(201).json({
        message: "Booking saved successfully",
        bookingId: result.insertId,
      });
    }
  );
});

app.get("/api/bookings", (req, res) => {
  const sql = "SELECT * FROM bookings ORDER BY date, time";

  db.query(sql, (error, results) => {
    if (error) {
      console.error("Error fetching bookings:", error);

      return res.status(500).json({
        message: "Failed to fetch bookings",
      });
    }

    res.json(results);
  });
});

app.put("/api/bookings/:id", (req, res) => {
  const bookingId = req.params.id;
  const { service, date, time } = req.body;

  const sql = `
    UPDATE bookings
    SET service = ?, date = ?, time = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [service, date, time, bookingId],
    (error) => {
      if (error) {
        console.error("Error updating booking:", error);

        return res.status(500).json({
          message: "Failed to update booking",
        });
      }

      res.json({
        message: "Booking updated successfully",
      });
    }
  );
});

app.delete("/api/bookings/:id", (req, res) => {
  const bookingId = req.params.id;

  const sql = "DELETE FROM bookings WHERE id = ?";

  db.query(sql, [bookingId], (error) => {
    if (error) {
      console.error("Error deleting booking:", error);

      return res.status(500).json({
        message: "Failed to delete booking",
      });
    }

    res.json({
      message: "Booking cancelled successfully",
    });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Tiger Detailing server running on port ${PORT}`);
});