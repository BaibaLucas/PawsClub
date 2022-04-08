/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* Get All News */
  async getAllTags() {
    const result = await client.query('SELECT t.id, t.name FROM "tag" AS t');
    if (result.rowCount == 0) {
        return null
    }
    return result.rows;
  },

  /* Create Tag */
  async createTag(tag) {
    const result = await client.query('INSERT INTO "tag"(name) VALUES ($1) RETURNING *', [tag.tag_name]);
    if (result.rowCount == 0) {
      return null
    }
    return result.rows[0];
  },

  /* Delete Tag */
  async deleteTag(tagId) {
    const result = await client.query('DELETE FROM "tag" WHERE id=$1 RETURNING *', [tagId]);
    if (result.rowCount == 0) {
      return null;
    }
    return result.rows;
  },


};