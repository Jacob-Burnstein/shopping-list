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

// // Gets stores by UserId
router.get("/users/stores", async (req, res) => {
  try {
    const stores = await prisma.store.findMany({
      where: { UserId: 1 },
    });
    res.json(stores);
  } catch (err) {
    console.error(err);
  }
});

// Gets list by store
router.get("/list", async (req, res) => {
  const { UserId, StoreId } = req.body;
  try {
    const itemList = await prisma.itemList.findMany({
      where: { UserId: { UserId }, StoreId: { StoreId } },
      orderBy: { Id: "desc" },
    });
    res.json(itemList);
  } catch (err) {
    console.error(err);
  }
});

// Checks or unchecks items
router.post("/list/check", async (req, res) => {
  const { Id, Checked } = req.body;
  if (!Checked) {
    try {
      await prisma.itemList.update({
        where: {
          Id: Id,
        },
        data: { Checked: true },
      });
      res.status(200).send("ItemList updated successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating ItemList");
    }
  } else
    try {
      await prisma.itemList.update({
        where: {
          Id: Id,
        },
        data: { Checked: false },
      });
      res.status(200).send("ItemList updated successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating ItemList");
    }
});

// Adds item to list
router.post("/list", async (req, res) => {
  const { StoreId, UserId, ItemName } = req.body;
  try {
    await prisma.itemList.create({
      data: { ItemName: ItemName, StoreId: StoreId, UserId: UserId },
    });
    res.status(200).send("Item added successfully");
  } catch (err) {
    console.error(err);
  }
});

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
