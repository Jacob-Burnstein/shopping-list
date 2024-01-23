const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Gets all users
router.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    console.error("error fetching users: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Gets specifc user details
// router.get("/users/1", async (req, res) => {
//   try {
//     const singleUser = await db.query("SELECT * FROM Users WHERE UserId = 1");
//     res.json(singleUser.rows);
//   } catch (err) {
//     console.error(err);
//   }
// });

// // Gets all stores for one user
// router.get("/users/stores", async (req, res) => {
//   try {
//     const stores = await db.query("SELECT * FROM Stores WHERE UserId = 1");
//     res.json(stores.rows);
//   } catch (err) {
//     console.error(er);
//   }
// });

// // Gets list by store
// router.get("/list", async (req, res) => {
//   try {
//     const itemList = await db.query(
//       "SELECT * FROM ItemList WHERE UserId = 2 AND StoreId = 1"
//     );
//     res.json(itemList.rows);
//   } catch (err) {
//     console.error(err);
//   }
// });

// router.post("/list/check", async (req, res) => {
//   const { id, checked } = req.body;
//   if (!checked) {
//     try {
//       await db.query(" UPDATE ItemList SET checked = TRUE WHERE Id = $1", [id]);
//       res.status(200).send("ItemList updated successfully");
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Error updating ItemList");
//     }
//   } else
//     try {
//       await db.query("UPDATE ItemList SET checked = FALSE WHERE Id = $1", [id]);
//       res.status(200).send("ItemList updated successfully");
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Error updating ItemList");
//     }
// });

// router.post("/list", async (req, res) => {
//   // const { storeid, userid } = req.body;
//   try {
//     newItem = await db.query(
//       "INSERT INTO ItemList (ItemName, StoreId, UserId) VALUES ('Veggies', 1, 2)"
//     );
//     res.status(200).send("Item added successfully");
//   } catch (err) {
//     console.error(err);
//   }
// });

// router.delete("/list", async (req, res) => {
//   const { id } = req.body;

//   try {
//     await db.query(" DELETE FROM ItemList WHERE Id = $1", [id]);
//     res.status(200).send("Item deleted successfully");
//   } catch (err) {
//     console.error(err);
//   }
// });

module.exports = router;
