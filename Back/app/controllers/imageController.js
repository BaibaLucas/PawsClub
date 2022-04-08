/* Package required */

/* Local required */
const imageDataMapper = require('../dataMappers/imageDataMapper');
const upload = require('../middleware/upload');

/* Controllers */

module.exports = {

  /* Upload profil picture */
  async uploadUserImg(req, res, next) {
    try {
      const uploadSingle = upload('paws-image', 'profil').single('myImage');
      const id = req.params.id;
      uploadSingle(req, res, async(err) => {
        if(err)
        return res.status(400).json({success: false, message: err.message});
        const uploadImg = await imageDataMapper.uploadUserImg(req.file.location, id);
        res.status(200).json({
          success: true,
          data: uploadImg,
          message: 'Votre image à été uploadée avec succès.'
        });
      })
    } catch(error) {
      console.log(error);
      next(error);
    }
  },

  /* Upload news picture */
  async uploadNewsImg(req, res, next) {
    try {
      const uploadSingle = upload('paws-image', 'news').single('myImage');
      const id = req.params.id;
      uploadSingle(req, res, async(err) => {
        if(err)
        return res.status(400).json({success: false, message: err.message});
        const uploadImg = await imageDataMapper.uploadNewsImg(req.file.location, id);
        res.status(200).json({
          success: true,
          data: uploadImg,
          message: 'Votre news a été créer avec succès.'
        });
      })
    } catch(error) {
      console.log(error);
      next(error);
    }
  },

  /* Upload linesup picture */
  async uploadSectionImg(req, res, next) {
    try {
      const uploadSingle = upload('paws-image', 'section').single('myImage');
      const id = req.params.id;
      uploadSingle(req, res, async(err) => {
        if(err)
        return res.status(400).json({success: false, message: err.message});
        const uploadImg = await imageDataMapper.uploadSectionImg(req.file.location, id);
        res.status(200).json({
          success: true,
          data: uploadImg,
          message: 'Section créer avec succès.'
        });
      })
    } catch(error) {
      next(error);
    }
  },

};