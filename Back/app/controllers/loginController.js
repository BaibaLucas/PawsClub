/* Package required */
const bcrypt = require('bcrypt');

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
          res.status('200').json({
            message: 'utilisateur connecté',
            data: login,
          })
        }
      }
    } catch (error) {
      next(error);
    }
  },

};