/* Package required */

/* Local required */
const client = require('./client');

/* DataMappers */

module.exports = {

  /* Get All News */
  async getAllNews() {
    const result = await client.query('SELECT n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, n.section_id, n.tag_id, u.id AS user_id, u.username, s.name AS section_name FROM "news" AS n JOIN "user" AS u ON n.user_id = u.id JOIN "section" AS s ON n.section_id = s.id ORDER BY n.date DESC;');
    if (result.rowCount == 0) {
        return null
    }
    return result.rows;
  },

  /* Get One News By Id*/
  async getOneNewsId(newsId) {
    const result = await client.query('SELECT n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, u.id AS user_id, u.username FROM "news" AS n JOIN "user" AS u ON n.user_id = u.id WHERE n.id=$1', [newsId]);
    if (result.rowCount == 0) {
        return null
    }
    return result.rows[0];
  },

  /* Get One News By slug */
  async getOneNewsSlug(newsSlug) {
    const result = await client.query('SELECT n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, u.id AS user_id, u.username FROM "news" AS n JOIN "user" AS u ON n.user_id = u.id WHERE n.title ILIKE $1', [newsSlug]);
    if (result.rowCount == 0) {
        return null
    }
    return result.rows[0];
  },

  /* Search News */
  async searchNews(news) {
    // FUTUR => SEARCHBAR WITH ILIKE %% Keyword for searching in all table
    
    if (!news.title && !news.author) {
      // NEWS BY TAG
      
      const keyword = `%${news.tag}%`;
      const result = await client.query('SELECT n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, u.id AS user_id, u.username, t.id AS tag_id, t.name FROM "news" AS n JOIN "user" AS u ON n.user_id = u.id JOIN "tag" AS t ON n.tag_id = t.id WHERE t.name ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    } else if (! news.author && ! news.tag) {
      // NEWS BY TITLE
      
      const keyword = `%${news.title}%`;
      const result = await client.query('SELECT n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, u.id AS user_id, u.username, t.id AS tag_id, t.name FROM "news" AS n JOIN "user" AS u ON n.user_id = u.id JOIN "tag" AS t ON n.tag_id = t.id WHERE n.title ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    } else {
      // NEWS BY TITLE
      const keyword = `%${news.author}%`;
      const result = await client.query('SELECT u.id, u.username, n.id AS news_id, n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, t.id AS tag_id, t.name FROM "user" AS u JOIN "news" AS n ON n.user_id = u.id JOIN "tag" AS t ON n.tag_id = t.id WHERE u.username ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    }
  },

  /* Create News */
  async createNews(news, today, time) {
      const result = await client.query('INSERT INTO "news"(title, subtitle, content, date, time, user_id, section_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [news.title, news.subtitle, news.content, today, time, news.user_id, news.news_sectionId ]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows[0];
  },

  /* Update News */
  async updateNews(news, today, time, tag, newsId) {
    const result = await client.query('UPDATE "news" SET title=$1, subtitle=$2, content=$3, date=$4, time=$5, tag_id=$6 WHERE id=$7 RETURNING *', [news.title, news.subtitle, news.content, today, time, tag, newsId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  /* Delete News */
  async deleteNews(newsId) {
    const result = await client.query('DELETE FROM "news" WHERE id=$1 RETURNING *', [newsId]);
    if (result.rowCount == 0) {
      return null;
    }
    return result.rows;
  },

};