const router = require("express").Router();
const { Pool } = require("pg");

const db = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

router.get("/users", async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM Users");
    res.json(users.rows);
    console.log(users);
  } catch (err) {
    console.error("error fetching users: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
