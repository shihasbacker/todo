import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  text: [
    {
      type: String,
    },
  ],
});

const todoModel = mongoose.model("todo", todoSchema);
export default todoModel;
