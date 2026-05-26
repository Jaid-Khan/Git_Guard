const githubClient = require("./githubClient");

const testGithubConnection = async () => {
  try {

    const response = await githubClient.rest.users.getAuthenticated();

    console.log("✅ GitHub Connected:");
    console.log(response.data.login);

  } catch (error) {

    console.error("❌ GitHub API Error:");
    console.error(error.message);

  }
};

module.exports = testGithubConnection;