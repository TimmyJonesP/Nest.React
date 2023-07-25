import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  dbAdmin: process.env.DB_ADMIN,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};
