//Import the Router class from express.
const { Router } = require("express");

//Import/require bcrypt algorithm. This is use to 'hash' the password on DB
const bcrypt = require("bcrypt");

//Import tables from ./models. Singular Capitalized.
const User = require("../models").user;

//Create a new Router instance.
const router = new Router();

//Sign up (new user): `POST /`
router.post("/", async (req, res, next) => {
  try {
    console.log("From usersRouter: got a request to CREATE user");
    const { email, password, fullName, isAdmin } = req.body;
    if (isAdmin) {
      res.status(403).send("Not allowed set isAdmin!");
      console.log("what is my req.body?", req.body);
    } else if (!email || !password || !fullName) {
      res.status(400).send("missing  parameters: full name, email or password");
      console.log("what is my req.body?", req.body);
    } else {
      const createUser = await User.create({
        email,
        password: bcrypt.hashSync(password, 10),
        fullName,
      });
      res.json(createUser);
    }
  } catch (e) {
    next("From usersRouter catch/try: ", e.message);
  }
});

//Export the router.
module.exports = router;
