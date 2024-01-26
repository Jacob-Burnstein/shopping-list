const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const jwt = require("jsonwebtoken");

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
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) res.status(401).send("Unauthorized");
  const payload = jwt.verify(token, process.env.JWT);
  try {
    const stores = await prisma.store.findMany({
      where: { UserId: payload.id },
    });
    res.json(stores);
  } catch (err) {
    console.error(err);
  }
});

// Gets list by store
router.get("/list/:id", async (req, res) => {
  const { id } = +req.params;
  const StoreId = id;
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) res.status(401).send("Unauthorized");
  const payload = jwt.verify(token, process.env.JWT);

  try {
    const itemList = await prisma.itemList.findMany({
      where: { UserId: payload.id, StoreId: StoreId },
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
router.post("/list/:id", async (req, res) => {
  const { id } = req.params;
  const StoreId = +id;
  const { ItemName } = req.body;

  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) res.status(401).send("Unauthorized");
  const payload = jwt.verify(token, process.env.JWT);
  try {
    await prisma.itemList.create({
      data: {
        ItemName: ItemName,
        StoreId: StoreId,
        UserId: payload.id,
      },
    });
    res.status(200).send("Item added successfully");
  } catch (err) {
    console.error(err);
  }
});

// Adds store to list
router.post("/users/store", async (req, res) => {
  const { StoreName } = req.body;
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) res.status(401).send("Unauthorized");
  const payload = jwt.verify(token, process.env.JWT);
  try {
    await prisma.store.create({
      data: { StoreName: StoreName, UserId: payload.id },
    });
    res.status(200).send("Store added successfully");
  } catch (err) {
    console.error(err);
  }
});

//Deletes item from list
router.delete("/list/:id", async (req, res) => {
  const { id } = +req.params;

  try {
    await prisma.itemList.delete({
      where: {
        Id: id,
      },
    });
    res.status(200).send("Item deleted successfully");
  } catch (err) {
    console.error(err);
  }
});

// Deletes store from list
router.delete("/store/:id", async (req, res) => {
  const { id } = req.params;
  const storeId = parseInt(id);
  try {
    await prisma.store.delete({
      where: {
        Id: storeId,
      },
    });
    res.status(200).send("Store deleted successfully");
  } catch (err) {
    console.error(err);
  }
});

// ///////// AUTH
// Register
router.post("/users", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await prisma.user.findUnique({
      where: {
        UserName: username,
      },
    });
    if (userExists) {
      return res
        .status(409)
        .send({ message: "A user with that name already exists." });
    } else {
      await prisma.user.create({
        data: {
          UserName: username,
          Password: password,
        },
      });
      res.status(201).send("User created!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error.");
  }
});

// User login
router.post("/users/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await prisma.user.findUnique({
      where: {
        UserName: username,
      },
    });
    const correctPassword = await prisma.user.findUnique({
      where: {
        UserName: username,
        Password: password,
      },
    });
    if (!userExists) {
      return res.status(404).json({ message: "Username not found" });
    } else if (!correctPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    } else {
      return res.json({
        token: jwt.sign({ id: userExists.Id }, process.env.JWT),
        message: "Successful Login!!",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
