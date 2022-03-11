const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'lukifanga2656',
  host: 'localhost',
  port: 4000,
  database: 'rest_api',
});

module.exports = pool;
