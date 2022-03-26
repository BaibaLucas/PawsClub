/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* All Sections */
  async getAllSections() {
    const result = await client.query('SELECT s.id, s.name, s.title, s.sectionurl, s.description, s.content FROM "section" AS s');
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

  /* Create Section */
  async createSection(section) {
    const result = await client.query('INSERT INTO "section"(name, title, description, content) VALUES ($1, $2, $3, $4) RETURNING *', [section.section_name, section.section_title, section.section_desc, section.section_content]);
    if (result.rowCount == 0) {
      return null
    }
    return result.rows[0];
  },

  /* Update Section */
  async updateSection(section, sectionId) {
    const result = await client.query('UPDATE "section" SET name=$1, title=$2, description=$3, content=$4 WHERE id=$5 RETURNING *', [section.section_name, section.section_title, section.section_desc, section.section_content, sectionId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  /* Delete Section */
  async deleteSection(sectionId) {
    const result = await client.query('DELETE FROM "section" WHERE id=$1 RETURNING *', [sectionId]);
    if (result.rowCount == 0) {
      return null;
    }
    return result.rows;
  },

};