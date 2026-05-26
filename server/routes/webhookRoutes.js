const express = require("express");

const router = express.Router();

const webhookAuthMiddleware = require(
  "../middlewares/webhookAuthMiddleware"
);

const {
  webhookHandler,
} = require("../controllers/webhookController");


router.post(
  "/github",
  webhookAuthMiddleware,
  webhookHandler
);

module.exports = router;