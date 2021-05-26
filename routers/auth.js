//Import the Router class from express.
const { Router } = require("express");

//Import the two jsonwebtoken library functions from path/file
const { toJWT, toData } = require("../auth/jwt");

//Import user tables from ./models to check on DB
const User = require("../models").user;

//Import bcrypt algorithm.
const bcrypt = require("bcrypt");

//Create a new Router instance.
const router = new Router();

//Sig in (receive JWtoken): `POST /auth/login`
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("what is request body?", req.body);

    if (!email || !password) {
      res.status(400).send("Please supply an email and password");
    } else {
      // 1. find user based on email address
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      // I have a user
      if (!user) {
        res.status(400).send({
          message: "User with that email does not exist",
        });
      }
      //2. use bcrypt.compareSync to check the received password (first argument) against the stored hash second argument
      else if (bcrypt.compareSync(password, user.password)) {
        //3. if the password is correct, return a JWT with the userId of the user (user.id)
        const jwt = toJWT({ userId: user.id });
        res.send({
          jwt,
        });
      } else {
        res.status(400).send({
          message: "Password was incorrect",
        });
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
