const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRouter = require("./controllers/todoController.js");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect("mongodb+srv://amit:amit1999@cluster0.3fzds10.mongodb.net/")
  .then(() => {
    console.log("connected to mongoDB server..");
  })
  .catch((err) => {
    console.log("error in connecting to DB :", err);
  });
const app = express();

app.set("views", "./view");
app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(express.urlencoded());
app.use("/", mainRouter);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console, log("error :", err);
  }
  console.log(`server listening at ${process.env.PORT} port`);
});
