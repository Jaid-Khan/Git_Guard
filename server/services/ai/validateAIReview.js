const validSeverities = [
  "LOW",
  "MEDIUM",
  "HIGH",
  "CRITICAL",
];

const validateAIReview = (reviews) => {
  if (!Array.isArray(reviews)) {
    return [];
  }

  return reviews.filter((review) => {
    return (
      review.file &&
      typeof review.file === "string" &&

      Number.isInteger(review.line) &&

      review.issue &&
      typeof review.issue === "string" &&

      review.severity &&
      typeof review.severity === "string" &&

      validSeverities.includes(
        review.severity.toUpperCase()
      )
    );
  });
};

module.exports = validateAIReview;