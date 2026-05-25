const express = require("express");

const router = express.Router();


// Test Route
router.post("/github", (req, res) => {
  console.log("GitHub Webhook Received");

  res.status(200).json({
    success: true,
    message: "Webhook received successfully",
  });
});


module.exports = router;