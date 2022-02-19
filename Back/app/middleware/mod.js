/* Package required */
const jwt = require('jsonwebtoken');
/* Local required */

/* Middleware Admin */
const modMW = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ');
    console.log('Token', token);
    console.log('Token[0]', token[0]);
    console.log('Token[1]', token[1]);
    const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
    console.log('tokenDecoded', tokenDecoded);
    const tokenRoleId = tokenDecoded.roleId;
    console.log('tokenRoleId', tokenRoleId);
    if (tokenRoleId === 2) {
      console.log('Access allowed : Moderator');
      return next();
    } else {
      console.log('Access denied : Only moderator');
      res.status('403').json({message : 'Access denied : Only moderator'});
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = modMW;