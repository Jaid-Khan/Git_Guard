const severityRank = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  CRITICAL: 4,
};

const filterBySeverity = (
  reviews,
  minimumSeverity
) => {
  const minRank =
    severityRank[minimumSeverity] || 1;

  return reviews.filter((review) => {
    const reviewRank =
      severityRank[review.severity] || 0;

    return reviewRank >= minRank;
  });
};

module.exports = filterBySeverity;