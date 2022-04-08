/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* Login */
  async login(email) {
    const result = await client.query('SELECT u.id, u.email, u.password, u.username, u.profilurl, u.role_id, u.section_id, s.name AS section_name FROM "user" AS u JOIN "section" AS s ON u.section_id = s.id WHERE u.email = $1', [email]);
    if (result.rowCount == 0) {
      return null;
    }
    return result.rows[0];
  },
};