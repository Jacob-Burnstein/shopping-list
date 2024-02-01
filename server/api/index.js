// const router = require("express").Router();
// const { PrismaClient } = require("@prisma/client");
// const jwt = require("jsonwebtoken");

// const prisma = new PrismaClient();

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
        username: userExists.UserName,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// const authenticateToken = (req, res, next) => {
//   const token =
//     req.headers.authorization && req.headers.authorization.split(" ")[1];
//   if (!token) {
//     return res.status(401).send("Unauthorized");
//   }
//   jwt.verify(token, process.env.JWT, (err, user) => {
//     if (err) {
//       return res.status(403).send("Forbidden");
//     }
//     req.user = user;
//     console.log("user after authentication: ", user);
//     next();
//   });
// };

// router.use(authenticateToken);

// // Gets stores by UserId
// router.get("/users/stores", async (req, res) => {
//   try {
//     const stores = await prisma.store.findMany({
//       where: { UserId: req.user.Id },
//     });
//     res.json(stores);
//   } catch (err) {
//     console.error(err);
//   }
// });

// Gets list by store
// router.get("/list/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const itemList = await prisma.itemList.findMany({
//       where: { UserId: req.user.Id, StoreId: +id },
//     });
//     const sortedItemList = itemList.sort((a, b) => a.Id - b.Id);
//     res.json(sortedItemList);
//   } catch (err) {
//     console.error(err);
//   }
// });

// Gets store details
// router.get("/stores/:storeId", async (req, res) => {
//   const { storeId } = req.params;
//   try {
//     const response = await prisma.store.findUnique({ where: { Id: +storeId } });
//     res.json(response);
//   } catch (err) {
//     console.error(err);
//   }
// });

// Checks or unchecks items
// router.post("/list/check", async (req, res) => {
//   const { Id, Checked } = req.body;
//   if (!Checked) {
//     try {
//       await prisma.itemList.update({
//         where: {
//           Id: Id,
//         },
//         data: { Checked: true },
//       });
//       res.status(200).send("ItemList updated successfully");
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Error updating ItemList");
//     }
//   } else
//     try {
//       await prisma.itemList.update({
//         where: {
//           Id: Id,
//         },
//         data: { Checked: false },
//       });
//       res.status(200).send("ItemList updated successfully");
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Error updating ItemList");
//     }
// });

// Adds item to list
// router.post("/list/:id", async (req, res) => {
//   const { id } = req.params;
//   const StoreId = +id;
//   const { ItemName } = req.body;
//   try {
//     await prisma.itemList.create({
//       data: {
//         ItemName: ItemName,
//         UserId: req.user.id,
//         StoreId: StoreId,
//       },
//     });
//     res.status(200).send("Item added successfully");
//   } catch (err) {
//     res.send("Error adding Item");
//     console.error(err);
//   }
// });

// Adds store to list
// router.post("/users/store", async (req, res) => {
//   const { StoreName } = req.body;
//   try {
//     await prisma.store.create({
//       data: { StoreName: StoreName, UserId: req.user.Id },
//     });
//     res.status(200).send("Store added successfully");
//   } catch (err) {
//     console.error(err);
//   }
// });

//Deletes item from list
// router.delete("/list/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     await prisma.itemList.delete({
//       where: {
//         Id: +id,
//       },
//     });
//     res.status(200).send("Item deleted successfully");
//   } catch (err) {
//     console.error(err);
//   }
// });

// Deletes store from list
// router.delete("/store/:id", async (req, res) => {
//   const { id } = req.params;
//   const storeId = parseInt(id);
//   try {
//     await prisma.store.delete({
//       where: {
//         Id: storeId,
//       },
//     });
//     res.status(200).send("Store deleted successfully");
//   } catch (err) {
//     console.error(err);
//   }
// });

module.exports = router;
