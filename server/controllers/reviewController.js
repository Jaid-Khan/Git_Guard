const Review = require("../models/Review");
const getAnalytics = require("../services/review/reviewAnalytics");

const getRepositoryReviews = async (req, res) => {
  const reviews = await Review.find({
    repoName: req.params.repoName,
  }).sort({ reviewedAt: -1 });

  res.status(200).json({
    success: true,
    count: reviews.length,
    data: reviews,
  });
};

const getReviewById = async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return res.status(404).json({
      success: false,
      message: "Review not found",
    });
  }

  res.status(200).json({
    success: true,
    data: review,
  });
};


const getReviewStats = async (
  req,
  res
) => {
  const stats =
    await getAnalytics();

  res.status(200).json({
    success: true,
    data: stats,
  });
};

module.exports = {
  getRepositoryReviews,
  getReviewById,
  getReviewStats,
};

