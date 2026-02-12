const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/appointments", async (req, res) => {
  const { name, phone, email, department, date, message } = req.body;

  try {
    const conn = await pool.getConnection();

    await conn.query(
      `INSERT INTO appointments 
       (name, phone, email, department, preferred_date, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, phone, email, department, date, message]
    );

    conn.release();

    res.status(201).json({
      message: "Appointment saved successfully",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Database error",
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
