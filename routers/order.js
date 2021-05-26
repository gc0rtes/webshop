//Import the Router class from express.
const { Router } = require("express");

//Import tables from ./models or ../models (PAY ATTENTION import as Singular and Capitalized)
const Order = require("../models").order;
const OrderProduct = require("../models").orderProduct;

//Create a new Router instance.
const router = new Router();

//Create new empty order: `POST /`
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

// Add products my order: `POST /orders/:orderId
router.post("/:orderId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    console.log(
      "From orderRouter: I got a request to add products to order n#",
      orderId
    );
    const { productId, quantity } = req.body;
    console.log("what is my req.body", req.body);

    //use this later to verify if the order belongs to user
    // const userId = req.user.id;
    // console.log("what is userId", userId);
    const addProduct = await OrderProduct.create({
      orderId: orderId,
      productId: productId,
      quantity: quantity,
    });
    res.json(addProduct);
  } catch (e) {
    next("From orderRouter catch/try: ", e);
  }
});

//See all products on my order: `GET /orders/:orderId`
router.get("/:orderId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    console.log("I got a request: Show all products on my order#", orderId);
    const productsOnMyOrder = await OrderProduct.findAll({
      where: { orderId: orderId },
      attributtes: ["productId"],
    });
    res.send(productsOnMyOrder);
  } catch (e) {
    next("From orderRouter catch/try: ", e);
  }
});

//Export the router.
module.exports = router;
