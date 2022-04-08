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

  /* Get One Section Id*/
  async getOneSectionId(req, res, next) {
    try {
        const sectionId = req.params.id;
        const section = await sectionDataMapper.getOneSectionById(sectionId);
        const sectionNews = await sectionDataMapper.sectionNews(sectionId);
        const sectionUsers = await sectionDataMapper.sectionUsers(sectionId);
        res.status('200').json({
            message: 'News & Users section',
            data: {section, sectionNews, sectionUsers},
            success: true,
        });
    } catch(error) {
        next(error);
    }
  },

  /* Get One Section Slug*/
  async getOneSectionSlug(req, res, next) {
    try {
        const slug = req.params.slug;
        const sectionSlug = slug.replaceAll('-', ' ');
        const section = await sectionDataMapper.getOneSection(sectionSlug);
        const sectionNews = await sectionDataMapper.sectionNews(section.id);
        const sectionUsers = await sectionDataMapper.sectionUsers(section.id);
        res.status('200').json({
            message: 'News & Users section',
            data: {section, sectionNews, sectionUsers},
            success: true,
        });
    } catch(error) {
        next(error);
    }
  },

  /* Create Section */
  async createSection(req, res, next) {
    try {
        const section = req.body;
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
        const sectionUpdated = await sectionDataMapper.updateSection(section, sectionId);
        res.json({
            message: 'Section modifié avec succès',
            success: true,
            data: sectionUpdated,
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
                message: 'Section supprimé avec succès',
                data: sectionDeleted,
                success: true,
            });
    } catch(error){
      next(error);
    }
  },

};