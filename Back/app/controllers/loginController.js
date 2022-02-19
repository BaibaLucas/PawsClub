/* Package required */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* Local required */
const loginDataMapper = require('../dataMappers/loginDataMapper');

/* Controllers */

module.exports = {

  /* Login */
  async login(req, res, next) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const login = await loginDataMapper.login(email);
      if (login === null) {
        res.status('404').json({message: 'Cette information ne nous permet pas de vérifier votre compte.'});
      } else {
        const verification = bcrypt.compareSync(password, login.password);
        if (!verification) {
          res.status('401').json({message: 'Veuillez retaper votre mot de passe.'});
        }
        if (verification) {
          const jwtContent = {userId: login.id, roleId: login.role_id};
          const jwtOptions = {
            algorithm: 'HS256',
            expiresIn: '3h'
          };
          res.status('200').json({
            message: 'utilisateur connecté',
            data: login,
            token: jwt.sign(jwtContent, process.env.JWTSECRET, jwtOptions)
          })
        }
      }
    } catch (error) {
      next(error);
    }
  },

};