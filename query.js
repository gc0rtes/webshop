const User = require("./models").user;
const Order = require("./models").order;
const Category = require("./models").category;
const Product = require("./models").product;

// find all users
async function getAllUsers() {
  try {
    const result = await User.findAll();
    return result.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then((users) => console.log("show all users: ", users));

// Test relation User <=> Order: show all orders include user
async function getAllOrdersUsers() {
  try {
    const result = await Order.findAll({
      include: [User],
    });
    return result.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllOrdersUsers().then((orders) =>
  console.log("show all orders include user: ", orders)
);

// Test relation Category <=> Product: show all categories include products
async function getAllCategoriesProducts() {
  try {
    const result = await Category.findAll({
      include: [Product],
    });
    return result.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllCategoriesProducts().then((categories) =>
  console.log("show all categories include products: ", categories)
);

// Test relation Order <=> Product: show all orders include products
async function getAllOrdersProducts() {
  try {
    const result = await Order.findAll({
      include: [Product],
    });
    return result.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllOrdersProducts().then((orders) =>
  console.log("show all orders include products: ", orders)
);

// to run: $ node name_of_file.js
