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

  /* Search Users */
  async searchUsers(user) {
    // FUTUR => SEARCHBAR WITH ILIKE %% Keyword for searching in all table
    console.log('search users =>', user);
    if (!user.section) {
      // USER BY NAME
      console.log('search by NAME', user);
      const keyword = `%${user.username}%`;
      const result = await client.query('SELECT u.id, u.username, u.email, u.password, u.profilurl, r.id AS role_id, r.name FROM "user" AS u JOIN "role" AS r ON u.role_id = r.id WHERE u.username ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    } else {
      // USERS BY SECTION
      console.log('search by SECTION', user);
      const keyword = `%${user.section}%`;
      const result = await client.query('SELECT u.id, u.username, u.email, u.password, u.profilurl, r.id AS role_id, r.name, s.id, s.name, s.title, s.description, s.content, m.user_id, m.section_id FROM "user" AS u JOIN "role" AS r ON u.role_id = r.id JOIN "m2m_user_belong_section" AS m ON m.user_id = u.id JOIN "section" AS s ON s.id = m.section_id WHERE s.name ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    }
  },

};