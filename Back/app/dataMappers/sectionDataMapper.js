/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* All Sections */
  async getAllSections() {
    const result = await client.query('SELECT s.id, s.name, s.title, s.description, s.content FROM "section" AS s');
    if (result.rowCount == 0) {
        return null
    }
    return result.rows;
  },

  /* Get One Section */
  async oneSection(sectionId) {
    const result = await client.query('SELECT * FROM "section" WHERE "section".id = $1', [sectionId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows[0];
  },

};