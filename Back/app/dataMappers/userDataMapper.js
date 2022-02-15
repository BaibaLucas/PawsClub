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

  
};