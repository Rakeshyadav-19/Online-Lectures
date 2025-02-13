import mongoose from "mongoose";

// Create Schema
const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "hey" },
  desc: String,
  isDone: Boolean,
});

// Export the schema
export const Todo = mongoose.model("Todo", TodoSchema);
