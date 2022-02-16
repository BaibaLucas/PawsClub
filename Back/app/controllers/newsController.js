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

};