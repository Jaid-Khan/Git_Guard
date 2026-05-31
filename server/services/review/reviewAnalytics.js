const Review = require("../../models/Review");

const getAnalytics = async () => {
  const reviews = await Review.find();

  const stats = {
    totalReviews: reviews.length,

    totalIssues: 0,

    critical: 0,
    high: 0,
    medium: 0,
    low: 0,

    security: 0,
    performance: 0,
    codeQuality: 0,
  };

  reviews.forEach((review) => {
    review.issues.forEach((issue) => {
      stats.totalIssues++;

      switch (issue.severity) {
        case "CRITICAL":
          stats.critical++;
          break;

        case "HIGH":
          stats.high++;
          break;

        case "MEDIUM":
          stats.medium++;
          break;

        case "LOW":
          stats.low++;
          break;
      }

      switch (issue.category) {
        case "Security":
          stats.security++;
          break;

        case "Performance":
          stats.performance++;
          break;

        case "Code Quality":
          stats.codeQuality++;
          break;
      }
    });
  });

  return stats;
};

const getRepositoryAnalytics = async (
  repoName
) => {
  const reviews = await Review.find({
    repoName,
  });

  const stats = {
    repoName,

    totalReviews: reviews.length,

    totalIssues: 0,

    critical: 0,
    high: 0,
    medium: 0,
    low: 0,

    security: 0,
    performance: 0,
    codeQuality: 0,
  };

  reviews.forEach((review) => {
    review.issues.forEach((issue) => {
      stats.totalIssues++;

      switch (issue.severity) {
        case "CRITICAL":
          stats.critical++;
          break;

        case "HIGH":
          stats.high++;
          break;

        case "MEDIUM":
          stats.medium++;
          break;

        case "LOW":
          stats.low++;
          break;
      }

      switch (issue.category) {
        case "Security":
          stats.security++;
          break;

        case "Performance":
          stats.performance++;
          break;

        case "Code Quality":
          stats.codeQuality++;
          break;
      }
    });
  });

  return stats;
};

module.exports = {
  getAnalytics,
  getRepositoryAnalytics,
};

