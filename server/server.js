require("dotenv").config();

const app = require("./app");

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const testGithubConnection = require("./services/github/testGithubConnection");

// Start Server Function
const startServer = async () => {
  try {
    // Connect MongoDB
    await connectDB();

    //Github Connection Test
    await testGithubConnection();
    // Start Express Server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
  }
};

startServer();
