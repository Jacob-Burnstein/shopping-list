const router = require("express").Router();
const { Pool } = require("pg");

const db = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Gets all users
router.get("/users", async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM Users");
    res.json(users.rows);
  } catch (err) {
    console.error("error fetching users: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Gets specifc user details
router.get("/users/1", async (req, res) => {
  try {
    const singleUser = await db.query("SELECT * FROM Users WHERE UserId = 1");
    res.json(singleUser.rows);
  } catch (err) {
    console.error(err);
  }
});

// Gets all stores for one user
router.get("/users/stores", async (req, res) => {
  try {
    const stores = await db.query("SELECT * FROM Stores WHERE UserId = 1");
    res.json(stores.rows);
  } catch (err) {
    console.error(er);
  }
});

// Gets list by store
router.get("/list", async (req, res) => {
  try {
    const itemList = await db.query(
      "SELECT * FROM ItemList WHERE UserId = 2 AND StoreId = 1"
    );
    res.json(itemList.rows);
  } catch (err) {
    console.error(err);
  }
});

router.post("/list/check", async (req, res) => {
  try {
    await db.query(
      "UPDATE ItemList SET checked = TRUE WHERE UserId = 2 AND StoreId = 1 AND Id = 4"
    );
    res.status(200).send("ItemList updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating ItemList");
  }
});

router.post("/list/uncheck", async (req, res) => {
  try {
    await db.query(
      "UPDATE ItemList SET checked = FALSE WHERE UserId = 2 AND StoreId = 1 AND Id = 4"
    );
    res.status(200).send("ItemList updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating ItemList");
  }
});

module.exports = router;
