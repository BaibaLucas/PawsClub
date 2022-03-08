/* Package required */
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
/* Local required */

/* DOC */
/**  CREATE AMAZON S3 ENVIRONMENT 

1°) Create an account to {@link https://aws.amazon.com}
2°) Create a new bucket go to {@link https://s3.console.aws.amazon.com/s3}
    - Name bucket Choose region Create waiting for upload server
3°) Go to IAM Access Management {@link https://console.aws.amazon.com/iamv2}
    - Go to user groups create new user group @param {name} with permissions policies @param {AmazonS3 FULL ACCESS}
    - Go to user create username like @param {S3-User}
    - Check programmatic access (ACCES KEY ID / SECRET / AWS API)
    - Add user to user groups
4°) Set bucket to public access
5°) Set your secret key in your env.
*/

/* Middleware Upload Img (Amazon S3) */

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

const upload = (bucketName, desc) => 
  
  multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        cb(null, { fieldname: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `${desc}-${req.params.id}`);
      },
    }),
  });

  module.exports = upload;