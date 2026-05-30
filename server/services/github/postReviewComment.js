const githubClient = require("./githubClient");

const postReviewComment = async ({
  owner,
  repo,
  pullNumber,
  review,
}) => {
  try {
    console.log("\n==============================");
    console.log("💬 POSTING REVIEW TO GITHUB");
    console.log("==============================");

    await githubClient.rest.issues.createComment({
      owner,
      repo,
      issue_number: pullNumber,
      body: review,
    });

    console.log("✅ Review Comment Posted");
  } catch (error) {
    console.error("❌ Failed To Post Review");
    console.error(error.message);

    throw new Error("Unable to post review comment");
  }
};

module.exports = postReviewComment;