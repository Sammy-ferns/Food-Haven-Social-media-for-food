import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  creator: String,
  selectedFile: String,
  title: String,
  description: String,
  ingredients: String,
  recipe: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
