/* Package required */

/* Local required */
const imageDataMapper = require('../dataMappers/imageDataMapper');
const upload = require('../middleware/upload');

/* Controllers */

module.exports = {

  /* Upload profil picture */
  async uploadUserImg(req, res, next) {
    try {
      console.log('imageController.js ----> uploadNewImg()');
      const uploadSingle = upload('paws-image', 'profil').single('myImage');
      console.log(req.params.id);
      const id = req.params.id;
      uploadSingle(req, res, async(err) => {
        if(err)
        return res.status(400).json({success: false, message: err.message});
        const uploadImg = await imageDataMapper.uploadUserImg(req.file.location, id);
        // console.log('test UpImg', uploadImg);
        res.status(200).json({
          sucess: true,
          // data: req.file.location,
          data: uploadImg,
        });
        console.log('IMG UPDATE SUCCESSFULLY');
      })
    } catch(error) {
      console.log('IMGCONTROLLER upload ---> ERROR ');
      next(error);
    }
  },
};