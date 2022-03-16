/* Package required */
const jwt = require('jsonwebtoken');

/* Local required */
const newsDataMapper = require('../dataMappers/newsDataMapper');
const upload = require('../middleware/upload');

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

  /* Create News */
  async createNews(req, res, next) {
    try {
        const news = req.body;
        console.log('news', news);
        // Create current date
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const date = month + '/' + day + '/' + year;
        // Create current time
        const time = new Date();
        const hours = time.getHours();
        const mins = time.getMinutes();
        const timeatm = hours + ':' + mins;
        console.log('today', date);
        console.log('time', timeatm);
        // FUTUR TAG REWORK
        const tag = 2;
        console.log('news', news);
        url = 'blabla';
        const createdNews = await newsDataMapper.createNews(url, news, date, timeatm, tag);
        res.status(200).json({
            data: createdNews,
            message: 'Votre news à été créer avec succès'
          });
          console.log('NEWS CREATED SUCCESSFULLY');
    } catch(error) {
      console.log('NEWS CONTROLLER CREATENEWS ---> ERROR ');
        next(error);
    }
  },

  /* Update News */
  async updateNews(req, res, next) {
    try {
      const news = req.body;
      const newsId = req.params.id;
      console.log('news', news);
      // Create current date
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      const date = year + '/' + month + '/' + day;
      // Create current time
      const time = new Date();
      const hours = time.getHours();
      const mins = time.getMinutes();
      const timeatm = hours + ':' + mins;
      console.log('today', date);
      console.log('time', timeatm);
      // FUTUR TAG REWORK
      const tag = 2;
      console.log('news', news);
      url = 'blabla';
      const updatedNews = await newsDataMapper.updateNews(url, news, date, timeatm, tag, newsId);
        res.json({
            message: 'News updated',
            data: updatedNews
        });
    } catch(error) {
        next(error);
    }
  },

  async deleteNews(req, res, next) {
    try {
      const token = req.headers.authorization.split(' ');
      const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
      const tokenRoleId = tokenDecoded.roleId;
      const tokenUserId = tokenDecoded.userId;
      // 1° Step Verif if user is admin or only member
      if (tokenRoleId === 3 || (tokenRoleId === 2)) {
        newsId = req.params.id;
      } else {
          res.status('403').json({message : 'Accès interdit : impossible de supprimer une news'});
          next(error);
      };
      const deleteNewsId = newsId;
      const newsDeleted = await newsDataMapper.deleteNews(deleteNewsId);
            res.json({
                message: 'deleted news',
                data: newsDeleted
            });
    } catch(error){
      next(error);
    }
  },

};