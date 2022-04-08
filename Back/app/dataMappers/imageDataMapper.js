/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* Upload profil picture */
  async uploadUserImg(imgUrl, id) {
    const result = await client.query('UPDATE "user" SET "profilurl"=$1 WHERE "id"=$2 RETURNING *', [imgUrl, id]);
    if (result.rowCount == 0) {
      return null
    }
    return result.rows[0];
  },

  /* Upload news picture */
  async uploadNewsImg(imgUrl, id) {
    const result = await client.query('UPDATE "news" SET "newsurl"=$1 WHERE "id"=$2 RETURNING *', [imgUrl, id]);
    if (result.rowCount == 0) {
      return null
    }
    return result.rows[0];
  },

  /* Upload section picture */
  async uploadSectionImg(imgUrl, id) {
    const result = await client.query('UPDATE "section" SET "sectionurl"=$1 WHERE "id"=$2 RETURNING *', [imgUrl, id]);
    if (result.rowCount == 0) {
      return null
    }
    return result.rows[0];
  },
};