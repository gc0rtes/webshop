//Import the Router class from express.
const { Router } = require("express");
//Import tables from ./models. Singular Capitalized.
const Product = require("../models").product;
//Create a new Router instance.
const router = new Router();

//Endpoint all products: `GET /products`
router.get("/", async (req, res) => {
  try {
    console.log("I got a request: Show all products");
    const allUsers = await Product.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log("From productRouter catch/try: ", e.message);
  }
});

//Export the router.
module.exports = router;
