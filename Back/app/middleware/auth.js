/* Package required */
const jwt = require('jsonwebtoken');
/* Local required */

/* Middlewares */
const auth = (req, res, next) => {
  console.log('MW AUTH');
  try {
    const token = req.headers.authorization.split(' ');
    console.log('Token', token);
    console.log('Token[0]', token[0]);
    console.log('Token[1]', token[1]);
    if (token[0] === 'Bearer' && jwt.verify(token[1], process.env.JWTSECRET)) {
      const verif = jwt.verify(token[1], process.env.JWTSECRET);
      console.log('Token Content decoded', verif);
      next();
    } else {
      res.sendStatus('403');
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
