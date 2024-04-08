const { Pool } = require('pg');
const pool = new Pool({
  user: 'yourUsername',
  host: 'localhost',
  database: 'postgres',
  password: '1738',
  port: 5432,
});

module.exports = pool;
