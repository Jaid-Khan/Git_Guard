const asyncHandler = require("../utils/asyncHandler");

const webhookHandler = asyncHandler(async (req, res) => {

  // GitHub Event Type
  const event = req.headers["x-github-event"];

  // Only handle pull_request events
  if (event !== "pull_request") {
    return res.status(200).json({
      success: true,
      message: "Ignored non pull_request event",
    });
  }

  // Pull Request Action
  const action = req.body.action;

  // Allowed PR Actions
  const allowedActions = [
    "opened",
    "synchronize",
    "reopened",
  ];

  // Ignore unwanted actions
  if (!allowedActions.includes(action)) {
    return res.status(200).json({
      success: true,
      message: `Ignored PR action: ${action}`,
    });
  }

  // Extract Pull Request Data
  const pullRequest = req.body.pull_request;
  const repository = req.body.repository;

  const prData = {
    action,
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

  return res.status(200).json({
    success: true,
    message: "Pull request webhook processed successfully",
    data: prData,
  });
});

module.exports = {
  webhookHandler,
};