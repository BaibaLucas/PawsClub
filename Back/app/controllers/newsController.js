/* Package required */


/* Local required */
const newsDataMapper = require('../dataMappers/newsDataMapper');

/* Controllers */

module.exports = {

  /* Get All News */
  async getAllNews(req, res, next) {
    try {
        const allNews = await newsDataMapper.getAllNews();
        res.status('200').json({
            data: allNews
        });
    } catch(error) {
        next(error);
    }
  },
  /* Get One News */
  async getOneNews(req, res, next) {
    try {
        const newsId = req.params.id;
        const oneNews = await newsDataMapper.getOneNews(newsId);
        res.status('200').json({
            data: oneNews
        });
    } catch(error) {
        next(error);
    }
  },

  /* Search News */
  async searchNews(req, res, next) {
    try {
        const news = req.body;
        const searchNews = await newsDataMapper.searchNews(news);
        res.status('200').json({
            message: 'News list',
            data: searchNews
        });
    } catch(error) {
        next(error);
    }
  },

};