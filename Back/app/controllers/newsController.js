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
  /* Get One News By Id */
  async getOneNewsId(req, res, next) {
    try {
        const newsId = req.params.id;
        const oneNews = await newsDataMapper.getOneNewsId(newsId);
        res.status('200').json({
            data: oneNews
        });
    } catch(error) {
        next(error);
    }
  },

  /* Get One News By Slug */
  async getOneNewsSlug(req, res, next) {
    try {
        const slug = req.params.slug;
        const newsSlug = slug.replaceAll('-', ' ');
        const oneNews = await newsDataMapper.getOneNewsSlug(newsSlug);
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
        const createdNews = await newsDataMapper.createNews(news, date, timeatm);
        res.status(200).json({
            data: createdNews,
            message: 'Votre news à été créer avec succès'
          });
    } catch(error) {
        next(error);
    }
  },

  /* Update News */
  async updateNews(req, res, next) {
    try {
      const news = req.body;
      const newsId = req.params.id;
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
      // FUTUR TAG REWORK
      const tag = 2;
      const updatedNews = await newsDataMapper.updateNews(news, date, timeatm, tag, newsId);
        res.json({
            message: 'News modifié avec succès',
            data: updatedNews,
            success: true,
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
                message: 'News supprimé avec succès',
                data: newsDeleted,
                success: true,
            });
    } catch(error){
      next(error);
    }
  },

};