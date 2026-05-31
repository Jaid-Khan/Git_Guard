const RepositorySettings = require("../models/RepositorySettings");

const createSettings = async (req, res) => {
  const settings = await RepositorySettings.create(req.body);

  res.status(201).json({
    success: true,
    data: settings,
  });
};

const getSettings = async (req, res) => {
  const settings = await RepositorySettings.findOne({
    repoName: req.params.repoName,
  });

  if (!settings) {
    return res.status(404).json({
      success: false,
      message: "Settings not found",
    });
  }

  res.status(200).json({
    success: true,
    data: settings,
  });
};

const updateSettings = async (req, res) => {
  const settings = await RepositorySettings.findOneAndUpdate(
    {
      repoName: req.params.repoName,
    },
    req.body,
    {
      returnDocument: "after",
    },
  );

  if (!settings) {
    return res.status(404).json({
      success: false,
      message: "Settings not found",
    });
  }

  res.status(200).json({
    success: true,
    data: settings,
  });
};

module.exports = {
  createSettings,
  getSettings,
  updateSettings,
};
