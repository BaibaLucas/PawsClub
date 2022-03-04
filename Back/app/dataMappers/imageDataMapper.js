/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* Upload profil picture */
  async uploadUserImg(imgUrl, id) {
    const result = await client.query('UPDATE "user" SET "profilurl"=$1 WHERE "id"=$2 RETURNING *', [imgUrl, id]);
    if (result.rowCount == 0) {
      console.log('Erreur DataMapper test');
      return null
    }
    return result.rows[0];
  },
};