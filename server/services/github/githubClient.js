const { Octokit } = require("@octokit/rest");

const githubClient = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

module.exports = githubClient;