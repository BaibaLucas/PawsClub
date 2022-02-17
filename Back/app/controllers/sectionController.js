/* Package required */


/* Local required */
const sectionDataMapper = require('../dataMappers/sectionDataMapper');

/* Controllers */

module.exports = {

  /* Get All Sections */
  async getAllSections(req, res, next) {
    try {
        const allSections = await sectionDataMapper.getAllSections();
        res.status('200').json({
            message:'Sections list',
            data: allSections
        });
    } catch(error) {
        next(error);
    }
  },

  /* Get One Section */
  async getOneSection(req, res, next) {
    try {
        const sectionId = req.params.id;
        const section = await sectionDataMapper.oneSection(sectionId);
        res.status('200').json({
            message: 'Lines-up content',
            data: section
        });
    } catch(error) {
        next(error);
    }
  },

};