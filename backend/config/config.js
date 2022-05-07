require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  endpoint: process.env.END_POINTS,
  projectId: process.env.PROJECT_ID,
  apiKey: process.env.API_KEY,
};

module.exports = { config };
