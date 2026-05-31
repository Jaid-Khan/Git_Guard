const RepositorySettings = require(
  "../../models/RepositorySettings"
);

const getRepoSettings = async (
  repoName
) => {
  let settings =
    await RepositorySettings.findOne({
      repoName,
    });

  if (!settings) {
    settings =
      await RepositorySettings.create({
        repoName,
      });

    console.log(
      `⚙ Default settings created for ${repoName}`
    );
  }

  return settings;
};

module.exports = getRepoSettings;