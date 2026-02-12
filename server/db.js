const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "ADMIN",   // change if you use a password
  database: "hospital_db",
  connectionLimit: 5,
});

module.exports = pool;
