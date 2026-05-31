const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    repoName: String,
    prNumber: Number,
    commitSha: String,

    reviewedAt: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model(
  "Review",
  reviewSchema
);