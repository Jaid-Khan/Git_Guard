const filterReviewsBySettings = (
  reviews,
  settings
) => {
  return reviews.filter((review) => {
    const category =
      review.category?.toLowerCase();

    if (
      category === "security" &&
      !settings.reviewSecurity
    ) {
      return false;
    }

    if (
      category === "performance" &&
      !settings.reviewPerformance
    ) {
      return false;
    }

    if (
      category === "code quality" &&
      !settings.reviewCodeQuality
    ) {
      return false;
    }

    return true;
  });
};

module.exports =
  filterReviewsBySettings;