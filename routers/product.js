//Import the Router class from express.
const { Router } = require("express");
//Import tables from ./models. Singular Capitalized.
const Product = require("../models").product;
//Import authMiddleware from path/file
const authMiddleware = require("../auth/middleware");
//Create a new Router instance.
const router = new Router();

//Endpoint all products: `GET /products`
router.get("/", async (req, res, next) => {
  try {
    console.log("I got a request: Show all products");
    const allUsers = await Product.findAll();
    res.send(allUsers);
  } catch (e) {
    next("From productRouter catch/try: ", e.message);
  }
});

// Admin add new product to shop: `POST /products/`
router.post("/", authMiddleware, async (req, res, next) => {
  try {
    console.log("From productRouter: got a request to CREATE new product");
    const userId = req.user;
    const isAdmin = req.user.dataValues.isAdmin;
    // console.log("what is user", userId);
    // console.log("what is isAdmin", isAdmin);

    const { name, price, url, catId } = req.body;
    console.log("what is my req.body?", req.body);
    if (!isAdmin) {
      res.status(403).send("Not allowed to add new product");
    } else if (!name || !price || !url || !catId) {
      res.status(400).send("missing  parameters");
    } else {
      const addProduct = await Product.create({
        name,
        price,
        url,
        catId,
      });
      res.json(addProduct);
    }
  } catch (e) {
    next("From usersRouter catch/try: ", e.message);
  }
});

//Export the router.
module.exports = router;
