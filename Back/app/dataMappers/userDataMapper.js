/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* Create new user */
  async createNewUser(newUser) {
    console.log('newUser in Mapper', newUser);
    const result = await client.query('INSERT INTO "user"(email, password, username) VALUES ($1, $2, $3) RETURNING *', [newUser.email, newUser.password, newUser.username]);
    if (result.rowCount === 0) {
      return null
    }
    return result.rows[0];
  },

  /* Get All Users */
  async getAllUsers() {
    const result = await client.query('SELECT u.id, u.username, u.email, u.password, u.profilurl, r.id AS role_id, r.name FROM "user" AS u JOIN "role" AS r ON u.role_id = r.id');
    return result.rows;
  },

  /* Get One User */
  async oneUser(userId) {
    const result = await client.query('SELECT * FROM "user" JOIN "role" ON "user".role_id = "role".id WHERE "user".id = $1', [userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows[0];
  },

};