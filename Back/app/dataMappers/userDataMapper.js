/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* Create new user */
  async createNewUser(newUser) {
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
    const result = await client.query('SELECT u.id, u.email, u.password, u.username, u.profilurl, u.role_id, u.section_id, s.name AS section_name FROM "user" AS u JOIN "section" AS s ON u.section_id = s.id WHERE u.id = $1', [userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows[0];
  },

  /* Search Users */
  async searchUsers(user) {
    // FUTUR => SEARCHBAR WITH ILIKE %% Keyword for searching in all table
    if (!user.section) {
      // USER BY NAME
      const keyword = `%${user.username}%`;
      const result = await client.query('SELECT u.id, u.username, u.email, u.password, u.profilurl, r.id AS role_id, r.name FROM "user" AS u JOIN "role" AS r ON u.role_id = r.id WHERE u.username ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    } else {
      // USERS BY SECTION
      const keyword = `%${user.section}%`;
      const result = await client.query('SELECT u.id, u.username, u.email, u.password, u.profilurl, r.id AS role_id, r.name, s.id, s.name, s.title, s.description, s.content, m.user_id, m.section_id FROM "user" AS u JOIN "role" AS r ON u.role_id = r.id JOIN "m2m_user_belong_section" AS m ON m.user_id = u.id JOIN "section" AS s ON s.id = m.section_id WHERE s.name ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    }
  },

  /* Update User */
  async updateUser(userId, userToUpdate) {
    const result = await client.query('UPDATE "user" SET username=$1, email=$2, password=$3 WHERE id=$4 RETURNING *', [userToUpdate.username, userToUpdate.email, userToUpdate.password, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  /* Update Only Role */
  async updateRole(userId, userToUpdate) {
    const result = await client.query('UPDATE "user" SET role_id=$1 WHERE id=$2 RETURNING *', [userToUpdate.role_id, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  /* Update Only Username */
  async updateUsername(userId, userToUpdate) {
    const result = await client.query('UPDATE "user" SET username=$1 WHERE id=$2 RETURNING *', [userToUpdate.username, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  /* Update Only Password */
  async updatePassword(userId, userToUpdate) {
    const result = await client.query('UPDATE "user" SET password=$1 WHERE id=$2 RETURNING *', [userToUpdate.password, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  /* Update Only section */
  async updateSection(userId, userToUpdate) {
    const result = await client.query('UPDATE "user" SET section_id=$1 WHERE id=$2 RETURNING *', [userToUpdate.section_id, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows[0];
  },

  /* Update Only Email */
  async updateEmail(userId, userToUpdate) {
    const result = await client.query('UPDATE "user" SET email=$1 WHERE id=$2 RETURNING *', [userToUpdate.email, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },
  
  /* Update Username & Password */
  async updateNamePassword(userId, userToUpdate) {
    const result = await client.query('UPDATE "user" SET username=$1, password=$2  WHERE id=$3 RETURNING *', [userToUpdate.username, userToUpdate.password, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  /* Update Username & Mail */
  async updateNameMail(userId, userToUpdate) {
    const result = await client.query('UPDATE "user" SET username=$1, email=$2  WHERE id=$3 RETURNING *', [userToUpdate.username, userToUpdate.email, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  /* Update Password & Mail */
  async updatePasswordMail(userId, userToUpdate) {
    const result = await client.query('UPDATE "user" SET password=$1, email=$2  WHERE id=$3 RETURNING *', [userToUpdate.password, userToUpdate.email, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  /* Delete user */
  async deleteUser(userId) {
    const result = await client.query('DELETE FROM "user" WHERE id=$1 RETURNING *', [userId]);
    if (result.rowCount == 0) {
      return null;
    }
    return result.rows;
  },

  /* Get All Streamers */
  async getAllStreamers() {
    const result = await client.query(`SELECT u.id, u.username, u.stream FROM "user" AS u WHERE "stream" IS NOT NULL and "stream" != '' `);
    return result.rows;
  },

};