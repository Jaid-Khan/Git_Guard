const express = require("express");

const {
  getRepositoryReviews,
  getReviewById,
} = require(
  "../controllers/reviewController"
);

const router = express.Router();

router.get(
  "/repository/:repoName",
  getRepositoryReviews
);

router.get(
  "/:id",
  getReviewById
);

module.exports = router;