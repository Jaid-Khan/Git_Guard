const express = require("express");

const {
  createSettings,
  getSettings,
  updateSettings,
} = require(
  "../controllers/settingsController"
);

const router = express.Router();

router.post("/", createSettings);

router.get(
  "/:repoName",
  getSettings
);

router.put(
  "/:repoName",
  updateSettings
);

module.exports = router;