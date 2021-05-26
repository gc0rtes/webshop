//Import Express
const express = require("express");

//Import routers files
const productRouter = require("./routers/product");

//Import authMiddleware from path/file

//Create a new express server named app
const app = express();

//Set up to handle incoming HTTP requests
const jsonParser = express.json();

//Add jsonParser as a middleware to app
app.use(jsonParser);

//Create app returns/path to the routers
app.use("/products", productRouter);

//Define the port
const port = process.env.PORT || 4000; // "const port =4000 ||process.env.PORT" is used when go to deploy on Heruku

// Start listening the server on port 4000 and log it.
app.listen(port, () => console.log(`Server listening on port ${port}`));