/* Package required */
const jwt = require('jsonwebtoken');

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

  /* Create Section */
  async createSection(req, res, next) {
    try {
        const section = req.body;
        console.log(section);
        const sectionCreated = await sectionDataMapper.createSection(section);
        res.json({
            message: 'Section created',
            data: sectionCreated
        });
    } catch(error) {
        next(error);
    }
  },

  /* Update Section */
  async updateSection(req, res, next) {
    try {
        const section = req.body;
        const sectionId = req.params.id;
        console.log(section);
        const sectionUpdated = await sectionDataMapper.updateSection(section, sectionId);
        res.json({
            message: 'Section updated',
            data: sectionUpdated
        });
    } catch(error) {
        next(error);
    }
  },

  /* Delete Section */
  async deleteSection(req, res, next) {
    try {
      const token = req.headers.authorization.split(' ');
      const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
      const tokenRoleId = tokenDecoded.roleId;
      // 1° Step Verif if user is admin
      if (tokenRoleId === 3) {
        sectionId = req.params.id;
      } else {
          res.status('403').json({message : 'Accès interdit : impossible de supprimer une section'});
          next(error);
      };
      const deleteSectionId = sectionId;
      const sectionDeleted = await sectionDataMapper.deleteSection(deleteSectionId);
            res.json({
                message: 'deleted section',
                data: sectionDeleted
            });
    } catch(error){
      next(error);
    }
  },

};