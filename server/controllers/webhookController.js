const asyncHandler = require("../utils/asyncHandler");
const cleanDiff = require("../utils/diffCleaner");
const generateReview = require("../services/ai/generateReview");
const postReviewComment = require("../services/github/postReviewComment");
const fetchPullRequestDiff = require("../services/github/fetchPullRequestDiff");

const formatReviewComment = require("../services/review/formatReview");

const webhookHandler = asyncHandler(async (req, res) => {
  const event = req.headers["x-github-event"];

  if (event !== "pull_request") {
    return res.status(200).json({
      success: true,
      message: "Ignored non pull_request event",
    });
  }

  const action = req.body.action;

  const allowedActions = ["opened", "synchronize", "reopened"];

  if (!allowedActions.includes(action)) {
    return res.status(200).json({
      success: true,
      message: `Ignored PR action: ${action}`,
    });
  }

  console.log("\n==============================");
  console.log(`🚀 PR EVENT: ${action}`);
  console.log("==============================");

  const pullRequest = req.body.pull_request;
  const repository = req.body.repository;

  const prData = {
    repoName: repository.full_name,
    repoOwner: repository.owner.login,
    repoUrl: repository.html_url,

    prNumber: pullRequest.number,
    prTitle: pullRequest.title,
    prBody: pullRequest.body,
    prState: pullRequest.state,

    prAuthor: pullRequest.user.login,
    prUrl: pullRequest.html_url,

    sourceBranch: pullRequest.head.ref,
    targetBranch: pullRequest.base.ref,

    commitsCount: pullRequest.commits,
    changedFiles: pullRequest.changed_files,
    additions: pullRequest.additions,
    deletions: pullRequest.deletions,

    createdAt: pullRequest.created_at,
    updatedAt: pullRequest.updated_at,
  };

  console.log("\n==============================");
  console.log("✅ Pull Request Event Received");
  console.log("==============================");

  console.log(prData);

  const diffFiles = await fetchPullRequestDiff({
    owner: repository.owner.login,
    repo: repository.name,
    pullNumber: pullRequest.number,
  });

  console.log("\n==============================");
  console.log("📂 PR DIFF FILES");
  console.log("==============================");

  console.dir(diffFiles, { depth: null });

  const cleanedDiff = cleanDiff(diffFiles);

  console.log("\n==============================");
  console.log("🧠 CLEANED DIFF FOR AI");
  console.log("==============================");

  console.dir(cleanedDiff, { depth: null });

  const numberedDiff = cleanedDiff.map((file) => ({
    filename: file.filename,

    changes: file.changes.map((change) => ({
      line: change.line,
      code: change.code,
    })),
  }));

  console.log("\n==============================");
  console.log("🔢 NUMBERED DIFF");
  console.log("==============================");

  console.dir(numberedDiff, {
    depth: null,
  });

  const aiReview = await generateReview(numberedDiff);
  console.log("\n==============================");
  console.log("🤖 AI REVIEW");
  console.log("==============================");

  console.dir(aiReview, { depth: null });

  const reviewComment = formatReviewComment(aiReview);

  console.log("\n==============================");
  console.log("📝 FORMATTED REVIEW");
  console.log("==============================");

  console.log(reviewComment);

  await postReviewComment({
    owner: repository.owner.login,
    repo: repository.name,
    pullNumber: pullRequest.number,
    review: reviewComment,
  });

  return res.status(200).json({
    success: true,
    message: "Pull request webhook processed",
  });
});

module.exports = {
  webhookHandler,
};
