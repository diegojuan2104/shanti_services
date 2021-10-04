require("dotenv").config({ path: ".env" })
export default {
  production: {
    user: process.env.USER_NAME_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE_NAME_DB,
    password: process.env.USER_PASSWORD_DB,
    port: process.env.DATABASE_PORT,
    ssl: true
  },
  development: {
    user: process.env.USER_NAME_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE_NAME_DB,
    password: process.env.USER_PASSWORD_DB,
    port: process.env.DATABASE_PORT,
    ssl: true
  },
};
