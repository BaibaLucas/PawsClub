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
          message: 'Tag created',
          data: tagCreated
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
              message: 'deleted tag',
              data: tagDeleted
          });
          console.log('Tag deleted');
  } catch(error){
    next(error);
  }
},


};