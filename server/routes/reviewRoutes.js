const express = require("express");

const {
  getRepositoryReviews,
  getReviewById,
  getReviewStats,
  getRepositoryStats,
  getRecentReviews,
} = require("../controllers/reviewController");

const router = express.Router();

router.get("/repository/:repoName", getRepositoryReviews);

router.get("/stats/dashboard", getReviewStats);
router.get("/stats/repository/:repoName", getRepositoryStats);
router.get("/recent/activity", getRecentReviews);
router.get("/:id", getReviewById);

module.exports = router;
