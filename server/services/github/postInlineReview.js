const githubClient = require("./githubClient");

const postInlineReview = async ({
  owner,
  repo,
  pullNumber,
  commitId,
  filePath,
  line,
  review,
}) => {
  try {
    console.log("\n==============================");
    console.log("📌 POSTING INLINE REVIEW");
    console.log("==============================");

    await githubClient.rest.pulls.createReviewComment({
      owner,
      repo,
      pull_number: pullNumber,

      commit_id: commitId,

      path: filePath,

      line,

      side: "RIGHT",

      body: review,
    });

    console.log(
      `✅ Inline Review Added -> ${filePath}:${line}`
    );
  } catch (error) {
    console.error("❌ Inline Review Failed");
    console.error(error.message);
  }
};

module.exports = postInlineReview;