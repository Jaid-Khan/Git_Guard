const validateWebhookSignature = require(
  "../services/github/validateWebhook"
);

const webhookAuthMiddleware = (req, res, next) => {

  const isValid = validateWebhookSignature(req);

  if (!isValid) {
    return res.status(401).json({
      success: false,
      message: "Invalid webhook signature",
    });
  }

  next();
};

module.exports = webhookAuthMiddleware;