/* Package required */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* Local required */
const userDataMapper = require('../dataMappers/userDataMapper');


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
        res.status('401').json({message: 'Votre mot de passe doit contenir au minimum une majuscule, un nombre et un caractère spéciale.'});
      };
      if (verification) {
        const hashedPassword = bcrypt.hashSync(newUser.password, saltRounds);
        const createdUser = await userDataMapper.createNewUser({
          username: newUser.username,
          email: newUser.email,
          password: hashedPassword,
        });
        res.status('200').json({
          message: 'new user created',
          data: createdUser,
        })
      }
    } catch (error) {
      console.log(error);
      if (error.constraint === 'user_email_key') {
        res.status('401').json({message: 'Email already exists'});
      }
      next(error);
    }
  },

  /* Get All Users */
  async getAllUsers(req, res, next) {
    try {
        console.log('je suis bien dans le controller');
        const allUsers = await userDataMapper.getAllUsers();
        res.status('200').json({
            data: allUsers
        });
    } catch(error) {
        next(error);
    }
  },

  /* Get One User */
  async getOneUser(req, res, next) {
    try {
        const userId = req.params.id;
        const oneUser = await userDataMapper.oneUser(userId);
        res.status('200').json({
            data: oneUser
        });
    } catch(error) {
        next(error);
    }
  },
};