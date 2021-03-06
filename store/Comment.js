const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: {
    type: String
  },
  comment: {
    type: String
  },
  product: {
    type: Number
  }
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
