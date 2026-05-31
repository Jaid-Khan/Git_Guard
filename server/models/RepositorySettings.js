const mongoose = require("mongoose");

const repositorySettingsSchema =
  new mongoose.Schema(
    {
      repoName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },

      enabled: {
        type: Boolean,
        default: true,
      },

      minSeverity: {
        type: String,
        enum: [
          "LOW",
          "MEDIUM",
          "HIGH",
          "CRITICAL",
        ],
        default: "LOW",
      },

      reviewSecurity: {
        type: Boolean,
        default: true,
      },

      reviewPerformance: {
        type: Boolean,
        default: true,
      },

      reviewCodeQuality: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "RepositorySettings",
  repositorySettingsSchema
);