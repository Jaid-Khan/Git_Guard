const octokit = require("../../config/github");

const fetchPullRequestDiff = async ({
  owner,
  repo,
  pullNumber,
}) => {
  try {
    console.log("\n==============================");
    console.log("📥 Fetching Pull Request Diff");
    console.log("==============================");

    const filesResponse =
      await octokit.pulls.listFiles({
        owner,
        repo,
        pull_number: pullNumber,
      });

    const prResponse =
      await octokit.pulls.get({
        owner,
        repo,
        pull_number: pullNumber,
      });

    const latestCommitSha =
      prResponse.data.head.sha;

    const diffFiles =
      filesResponse.data.map((file) => ({
        filename: file.filename,
        status: file.status,
        additions: file.additions,
        deletions: file.deletions,
        changes: file.changes,
        patch:
          file.patch ||
          "No patch available",
      }));

    console.log(
      `✅ Total Changed Files: ${diffFiles.length}`
    );

    return {
      files: diffFiles,
      commitSha: latestCommitSha,
    };
  } catch (error) {
    console.error(
      "❌ Failed to Fetch PR Diff"
    );

    console.error(error.message);

    throw error;
  }
};

module.exports = fetchPullRequestDiff;