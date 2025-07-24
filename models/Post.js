// Simple Post model with just the essential fixes
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1, // Prevent empty strings
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 1, // Prevent empty strings
      maxlength: 1000,
    },
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // Optional if the post can be created without a logged-in user
    },
    votesCount: {
      type: Number,
      default: 0, // Default to 0 votes
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Add basic indexes for performance
postSchema.index({ boardId: 1 });
postSchema.index({ userId: 1 });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
