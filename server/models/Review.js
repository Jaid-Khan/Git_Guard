const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    repoName: {
      type: String,
      required: true,
    },

    prNumber: {
      type: Number,
      required: true,
    },

    prTitle: {
      type: String,
      default: "",
    },

    prAuthor: {
      type: String,
      default: "",
    },

    commitSha: {
      type: String,
      required: true,
    },

    issues: [
      {
        file: String,
        line: Number,
        severity: String,
        category: String,
        issue: String,
        explanation: String,
        suggestion: String,
        fixedCode: String,
      },
    ],

    totalIssues: {
      type: Number,
      default: 0,
    },

    reviewedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Review",
  reviewSchema
);