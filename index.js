require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend JS running with MySQL 🚀",
  });
});

app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        u.id,
        u.name,
        u.email,
        u.created_at,
        r.name AS role
      FROM users u
      LEFT JOIN roles r ON r.id = u.role_id
      ORDER BY u.id ASC
    `);

    res.json({
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to fetch users",
    });
  }
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from backend-js 👋" });
});

app.get("/db-check", async (req, res) => {
  const [rows] = await pool.query("SELECT NOW() as now");
  res.json(rows[0]);
});

app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    path: req.originalUrl,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend JS listening on port ${PORT}`);
});
