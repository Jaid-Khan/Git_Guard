const asyncHandler = require("../utils/asyncHandler");

const fetchPullRequestDiff = require(
  "../services/github/fetchPullRequestDiff"
);

const webhookHandler = asyncHandler(async (req, res) => {

  const event = req.headers["x-github-event"];

  // Only handle PR events
  if (event !== "pull_request") {

    return res.status(200).json({
      success: true,
      message: "Ignored non pull_request event",
    });
  }

  const action = req.body.action;

  // Only trigger when PR opened
  if (action !== "opened") {

    return res.status(200).json({
      success: true,
      message: `Ignored PR action: ${action}`,
    });
  }

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

  /*
    FETCH PR DIFF
  */

  const diffFiles = await fetchPullRequestDiff({
    owner: repository.owner.login,
    repo: repository.name,
    pullNumber: pullRequest.number,
  });

  console.log("\n==============================");
  console.log("📂 PR DIFF FILES");
  console.log("==============================");

  console.dir(diffFiles, { depth: null });

  return res.status(200).json({
    success: true,
    message: "Pull request webhook processed",
    data: {
      prData,
      diffFiles,
    },
  });
});

module.exports = {
  webhookHandler,
};