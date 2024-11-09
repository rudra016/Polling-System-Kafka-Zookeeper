
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "polling",
  password: "rudra",
  port: 5432,
});

module.exports = pool;
