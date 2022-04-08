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


  async sectionNews(sectionId) {
    const result = await client.query('SELECT * FROM "news" WHERE "section_id" = $1', [sectionId]);
    if (result.rowCount == 0) {
      return null;
    }
    return result.rows;
  },


  async getOneSection(sectionSlug) {
    const result = await client.query('SELECT * FROM "section" WHERE "title" ILIKE $1', [sectionSlug]);
    if (result.rowCount == 0) {
      return null;
    }
    return result.rows[0];
  },

  async getOneSectionById(id) {
    const result = await client.query('SELECT * FROM "section" WHERE "id" = $1', [id]);
    if (result.rowCount == 0) {
      return null;
    }
    return result.rows[0];
  },

  async sectionUsers(sectionId) {
    const result = await client.query('SELECT * FROM "user" WHERE "section_id" = $1', [sectionId]);
    if (result.rowCount == 0) {
      return null;
    }
    return result.rows;
  },

  async oneSection1(sectionId) {
    const result = await client.query('SELECT * FROM "section" WHERE id = $1', [sectionId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },
  async oneSection2(sectionId) {
    const result = await client.query(`SELECT JSON_AGG(JSON_build_object('id', news.id, 'title', news.title, 'subtitle', news.subtitle, 'content', news.content, 'newsurl', news.newsurl, 'date', news.date, 'time', news.time, 'user_id', news.user_id, 'section_id', news.section_id)) AS "newsSection" FROM "news" WHERE news.section_id=$1`, [sectionId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },
  async oneSection3(sectionId) {
    const result = await client.query('SELECT * FROM "user" WHERE "user".section_id = $1', [sectionId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
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