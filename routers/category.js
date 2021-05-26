//Import the Router class from express.
const { Router } = require("express");
//Import tables from ./models. Singular Capitalized.
const Category = require("../models").category;
const Product = require("../models").product;
//Create a new Router instance.
const router = new Router();

//Endpoint products by category: `GET /categories/:categoryId/products`
router.get("/:categoryId", async (request, response, next) => {
  try {
    const categoryId = parseInt(request.params.categoryId); //to get what user wrote
    console.log(`I got a request: products by categories/${categoryId}`);
    const categoryById = await Category.findByPk(categoryId, {
      attributes: ["name", "description"],
      include: { model: Product, attributes: ["name"] },
    });
    if (!categoryById) {
      response.status(404).send("Category not found");
    } else {
      response.send(categoryById);
    }
  } catch (e) {
    console.log("From categoryRouter catch/try: ", e.message);
  }
});

//Export the router.
module.exports = router;
