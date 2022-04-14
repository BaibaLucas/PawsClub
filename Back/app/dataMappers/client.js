/* Package required */
const { Pool } = require('pg');

/* Local required */

/* DB POOL */
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = pool;
