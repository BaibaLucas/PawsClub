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

    

};