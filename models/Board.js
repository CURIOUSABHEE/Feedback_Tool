import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Optional: adds createdAt and updatedAt
  }
);

// Fix: Use "Board" for both the model name and the check
const Board = mongoose.models.Board || mongoose.model("Board", boardSchema);

export default Board;
