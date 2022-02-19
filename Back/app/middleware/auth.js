/* Package required */
const jwt = require('jsonwebtoken');
/* Local required */

/* Middleware Auth */
const authMW = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ');
    console.log('Token', token);
    console.log('Token[0]', token[0]);
    console.log('Token[1]', token[1]);
    if (token[0] === 'Bearer' && jwt.verify(token[1], process.env.JWTSECRET)) {
      console.log('Access allowed : Member');
      return next();
    } else {
      console.log('Access denied : Only member');
      res.status('403').json({message : 'Access denied : Only member'});
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authMW;
