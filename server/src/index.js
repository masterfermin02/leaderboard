require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const { userController } = require("./controllers");
const {  users, updateUser, addUser } = userController;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.use(cors({origin: '*'}));

const server = () => {
  app.get("/", (req, res) => res.send("Hello World!"));

  app.get("/users", users);

  app.get("/users/:name", users);

  app.post("/users", addUser);

  app.put("/users/:idNumber", updateUser);

  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );

  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

};

const mongoDB = 'mongodb://root:example@localhost/';
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB,  { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
  console.log("Connected to MongoDB!\n");

  server();
});
