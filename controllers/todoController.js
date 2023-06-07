const express = require("express");
const router = express.Router();
const TodoSchema = require("../models/Todo");

const todos = [
  {
    id: 1,
    text: "first todo",
  },
  {
    id: 2,
    text: "2nd todo",
  },
  {
    id: 3,
    text: "third todo",
  },
];

router.get("/", async (req, res) => {
  try {
    const todosFromDb = await TodoSchema.find();
    res.render("./index", { title: "home page", results: todosFromDb });
  } catch (err) {
    console.log(err);
  }
});

router.get("/addtoServer", (req, res) => {
  res.end("hello");
});

router.get("/deleteTodo", async (req, res) => {
  try {
    const result = await TodoSchema.findByIdAndDelete(req.query.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

router.post("/addTodo", async (req, res) => {
  try {
    if (req.body.text == "") {
      res.redirect("/");
    }
    const result = await TodoSchema.create({ text: req.body.text });
    return res.redirect("/");
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
