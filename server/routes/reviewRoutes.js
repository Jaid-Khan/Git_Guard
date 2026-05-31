const express = require("express");

const {
  getRepositoryReviews,
  getReviewById,
  getReviewStats,
  getRepositoryStats,
} = require("../controllers/reviewController");

const router = express.Router();

router.get("/repository/:repoName", getRepositoryReviews);

router.get("/stats/dashboard", getReviewStats);
router.get("/stats/repository/:repoName", getRepositoryStats);
router.get("/:id", getReviewById);

module.exports = router;
