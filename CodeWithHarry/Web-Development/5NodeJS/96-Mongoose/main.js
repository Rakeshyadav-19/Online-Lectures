// Used to connect ieth MongoDB and work with it
// const mongoose = require("mongoose");

// Mongoose provide validation and schema creation, not like "mongodb"
import mongoose from "mongoose";
import express from "express";
// Import the schema
import { Todo } from "./models/Todo.js";

// Strat the connection
await mongoose.connect("mongodb://localhost:27017/");

// Import express for the website req
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // Create a new entry in table and save it
  const todo = new Todo({ title: "Rax", desc: "My todo app", isDone: false });
  todo.save();
  res.send("Hello World!");
});

// To do some query example
app.get("/a", async (req, res) => {
  let todo = await Todo.findOne({});
  res.json({ title: todo.title, desc: todo.desc, isDone: todo.isDone });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
