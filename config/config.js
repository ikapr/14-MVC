const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;

// config.json
{
  "development"; {
    "username"; process.env.DB_USER,
    "password"; process.env.DB_PASSWORD,
    "database"; process.env.DB_NAME,
    "host"; "localhost",
    "dialect"; "mysql",
    "port"; 3306
  }
  // ... (similar configurations for other environments like "test" and "production")
}
