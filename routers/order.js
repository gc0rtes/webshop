//Import the Router class from express.
const { Router } = require("express");

//Import tables from ./models or ../models (PAY ATTENTION import as Singular and Capitalized)
const Order = require("../models").order;

//Import authMiddleware from path/file
const authMiddleware = require("../auth/middleware");

//Create a new Router instance.
const router = new Router();

//Create new empty order: `POST /new_order`
router.post("/", async (req, res, next) => {
  try {
    console.log("From orderRouter: I got a request to create a order");

    const userId = req.user.id;
    console.log("what is userId", userId);

    const createOrder = await Order.create({ userId: userId });
    res.json(createOrder);
  } catch (e) {
    next(e);
  }
});

//Export the router.
module.exports = router;
