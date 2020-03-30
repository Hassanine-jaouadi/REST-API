const express = require("express"); // import expres sserver side framework
const cors = require("cors");
const mongoose = require("mongoose"); // mongoose will help us to connect to MongoDb

require("dotenv").config(); // environment variable in "dotenv" file

const app = express(); // assign "express()" to "app" object
const port = process.env.PORT || 5000; // define port

app.use(cors()); // cors middleware
app.use(express.json()); // parse json

// connection "server.js" with Mongo db database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// endpoints
const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

// create server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
