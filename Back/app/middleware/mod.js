/* Package required */
const jwt = require('jsonwebtoken');
/* Local required */

/* Middleware Admin */
const modMW = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ');
    const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
    const tokenRoleId = tokenDecoded.roleId;
    if (tokenRoleId === 2 || tokenRoleId === 3) {
      return next();
    } else {
      return res.status('403').json({message : 'Access denied : Only moderator'});
    }
  } catch (error) {
    next(error);
  }
};

module.exports = modMW;