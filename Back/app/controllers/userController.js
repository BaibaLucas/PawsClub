/* Package required */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* Local required */
const userDatamapper = require('../dataMappers/userDataMapper');

/* Controllers */

module.exports = {

  /* Create new user */
  async createNewUser(req, res, next) {
    try{
      const newUser = req.body;
      console.log('New user =', newUser);
      const saltRounds = 10;
      const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
      const verification = regexPassword.test(newUser.password);
      console.log(verification);

      if (!verification) {
        console.log('verification failed')
        res.status('401').json({data: newUser});
      };

      if (verification) {
        const hashedPassword = bcrypt.hashSync(newUser.password, saltRounds);

        const createdUser = await userDatamapper.createNewUser({
          username: newUser.username,
          email: newUser.email,
          password: hashedPassword,
        });

        res.json({
          status: 200,
          message: 'new user created',
          data: createdUser,
        })
      }

    } catch (error) {
      next(error);
    }
  },

};