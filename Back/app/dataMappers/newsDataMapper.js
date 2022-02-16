/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* Get All News */
  async getAllNews() {
    const result = await client.query('SELECT n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, u.id AS user_id, u.username FROM "news" AS n JOIN "user" AS u ON n.user_id = u.id');
    if (result.rowCount == 0) {
        return null
    }
    return result.rows;
},

};