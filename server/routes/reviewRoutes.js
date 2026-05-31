const express = require("express");

const {
  getRepositoryReviews,
  getReviewById,
  getReviewStats,
  getRepositoryStats,
  getRecentReviews,
  getTopRepos,
  getSeverityStats,
  getCategoryStats,
  getLeaderboard,
} = require("../controllers/reviewController");

const router = express.Router();

router.get("/repository/:repoName", getRepositoryReviews);
router.get("/stats/leaderboard", getLeaderboard);
router.get("/stats/dashboard", getReviewStats);
router.get("/stats/repository/:repoName", getRepositoryStats);
router.get("/recent/activity", getRecentReviews);
router.get("/stats/categories", getCategoryStats);
router.get("/stats/top-repositories", getTopRepos);
router.get("/stats/severity", getSeverityStats);
router.get("/:id", getReviewById);

module.exports = router;
