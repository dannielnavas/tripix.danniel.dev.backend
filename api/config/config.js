require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  // cors: process.env.CORS,
  apiKeyToken: process.env.API_KEY || 123456,
  jwtSecret: process.env.JWT_SECRET,
  // smtp: process.env.SMTP,
  // smtpPort: process.env.SMTP_PORT,
  // smtpUser: process.env.SMTP_USER,
  // smtpPassword: process.env.SMTP_PASSWORD,
};

module.exports = { config };
