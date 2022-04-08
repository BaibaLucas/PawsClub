/* Package required */
const jwt = require('jsonwebtoken');
/* Local required */

/* Middleware Auth */
const authMW = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ');
    const pb = jwt.verify(token[1], process.env.JWTSECRET);
    if (token[0] === 'Baerer' && jwt.verify(token[1], process.env.JWTSECRET)) {
      return next();
    } else {
      return res.status('403').json({message : 'Access denied : Only member'});
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authMW;
