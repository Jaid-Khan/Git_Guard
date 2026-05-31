const Review = require("../models/Review");
const {
  getAnalytics,
  getRepositoryAnalytics,
} = require("../services/review/reviewAnalytics");

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

const getReviewStats = async (req, res) => {
  const stats = await getAnalytics();

  res.status(200).json({
    success: true,
    data: stats,
  });
};

const getRepositoryStats =
  async (req, res) => {
    const stats =
      await getRepositoryAnalytics(
        req.params.repoName
      );

    res.status(200).json({
      success: true,
      data: stats,
    });
  };

  const getRecentReviews = async (
  req,
  res
) => {
  const reviews = await Review.find()
  .select(
    "repoName prNumber prTitle prAuthor totalIssues reviewedAt"
  )
  .sort({ reviewedAt: -1 })
  .limit(10);

  res.status(200).json({
    success: true,
    count: reviews.length,
    data: reviews,
  });
};

module.exports = {
  getRepositoryReviews,
  getReviewById,
  getReviewStats,
  getRepositoryStats,
  getRecentReviews,
};