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
          sucess: true,
          data: uploadImg,
          message: 'Votre image à été uploadée avec succès.'
        });
        console.log('IMG UPDATE SUCCESSFULLY');
      })
    } catch(error) {
      console.log('IMGCONTROLLER upload ---> ERROR ');
      next(error);
    }
  },
};