const express = require("express");

const {
    getRepositoryReviews,
    getReviewById,
    getReviewStats,
} = require("../controllers/reviewController");

const router = express.Router();

router.get("/repository/:repoName", getRepositoryReviews);

router.get("/stats/dashboard", getReviewStats);
router.get("/:id", getReviewById);

module.exports = router;
