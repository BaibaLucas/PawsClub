/* Package required */

/* Local required */
const tagDataMapper = require('../dataMappers/tagDataMapper');

/* Controllers */

module.exports = {

/* GET ALL TAGS */
async getAllTags(req, res, next) {
  try {
      const allTags = await tagDataMapper.getAllTags();
      res.status('200').json({
          data: allTags
      });
  } catch(error) {
      next(error);
  }
},

/* Create Tag */
async createTag(req, res, next) {
  try {
      const tag = req.body;
      console.log(tag);
      const tagCreated = await tagDataMapper.createTag(tag);
      res.json({
          message: 'Tag créer avec succès',
          data: tagCreated,
          success: true,
      });
  } catch(error) {
      next(error);
  }
},

/* Delete tag */
async deleteTag(req, res, next) {
  try {
      userId = req.params.id;
    const deleteTagId = userId;
    const tagDeleted = await tagDataMapper.deleteTag(deleteTagId);
          res.json({
              message: 'Tag supprimé avec succès',
              data: tagDeleted,
              success: true,
          });
          console.log('Tag deleted');
  } catch(error){
    next(error);
  }
},


};