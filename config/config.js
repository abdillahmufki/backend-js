require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "backend",
    password: process.env.DB_PASSWORD || "backendpass",
    database: process.env.DB_NAME || "backend_db",
    host: process.env.DB_HOST || "mariadb",
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    dialect: "mariadb",
    dialectOptions: {
      allowPublicKeyRetrieval: true,
    },
  },
  production: {
    username: process.env.DB_USER || "backend",
    password: process.env.DB_PASSWORD || "backendpass",
    database: process.env.DB_NAME || "backend_db",
    host: process.env.DB_HOST || "mariadb",
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    dialect: "mariadb",
    dialectOptions: {
      allowPublicKeyRetrieval: true,
    },
  },
};
