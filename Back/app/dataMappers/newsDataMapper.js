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

  /* Get One News */
  async getOneNews(newsId) {
    const result = await client.query('SELECT n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, u.id AS user_id, u.username FROM "news" AS n JOIN "user" AS u ON n.user_id = u.id WHERE n.id=$1', [newsId]);
    if (result.rowCount == 0) {
        return null
    }
    return result.rows;
  },

  /* Search News */
  async searchNews(news) {
    // FUTUR => SEARCHBAR WITH ILIKE %% Keyword for searching in all table
    console.log('search news =>', news);
    if (!news.title && !news.author) {
      // NEWS BY TAG
      console.log('search by TAG', news);
      const keyword = `%${news.tag}%`;
      const result = await client.query('SELECT n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, u.id AS user_id, u.username, t.id AS tag_id, t.name FROM "news" AS n JOIN "user" AS u ON n.user_id = u.id JOIN "tag" AS t ON n.tag_id = t.id WHERE t.name ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    } else if (! news.author && ! news.tag) {
      // NEWS BY TITLE
      console.log('search by TITLE', news);
      const keyword = `%${news.title}%`;
      const result = await client.query('SELECT n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, u.id AS user_id, u.username, t.id AS tag_id, t.name FROM "news" AS n JOIN "user" AS u ON n.user_id = u.id JOIN "tag" AS t ON n.tag_id = t.id WHERE n.title ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    } else {
      // NEWS BY TITLE
      console.log('search by AUTHOR', news);
      const keyword = `%${news.author}%`;
      const result = await client.query('SELECT u.id, u.username, n.id AS news_id, n.id, n.title, n.subtitle, n.content, n.newsurl, n.date, n.time, t.id AS tag_id, t.name FROM "user" AS u JOIN "news" AS n ON n.user_id = u.id JOIN "tag" AS t ON n.tag_id = t.id WHERE u.username ILIKE $1', [keyword]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows;
    }
  },

  /* Create News */
  async createNews(news) {
      const result = await client.query('INSERT INTO "news"(title, subtitle, content, newsurl, date, time, user_id, tag_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [news.title, news.subtitle, news.content, news.newsurl, news.date, news.time, news.userId, news.tagId]);
      if (result.rowCount == 0) {
        return null
      }
      return result.rows[0];
  },

  /* Update News */
  async updateNews(news, newsId) {
    const result = await client.query('UPDATE "news" SET title=$1, subtitle=$2, content=$3, newsurl=$4, date=$5, time=$6, user_id=$7, tag_id=$8 WHERE id=$9 RETURNING *', [news.title, news.subtitle, news.content, news.newsurl, news.date, news.time, news.userId, news.tagId, newsId]);
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