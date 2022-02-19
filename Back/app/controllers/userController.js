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

  /* Search Users */
  async searchUsers(req, res, next) {
    try {
        const user = req.body;
        const searchUsers = await userDataMapper.searchUsers(user);
        res.status('200').json({
            message: 'Users list',
            data: searchUsers
        });
    } catch(error) {
        next(error);
    }
  },

  /* Update user */
  async updateUser(req, res, next) {
    try {
      //avant d'updater un user, vérif du role du user :
      //si c'est un administrateur, il peut modifier n'importe quel user
      //si ce n'est pas un administrateur, il ne peut modifier que son profil
      const token = req.headers.authorization.split(' ');
      const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
      const tokenRoleId = tokenDecoded.roleId;
      const tokenUserId = tokenDecoded.userId;
      console.log('TRY 1')

      if (tokenRoleId === 2 || (tokenRoleId === 1 && tokenUserId == req.params.id)) {
          userId = req.params.id;
          console.log('TRY 2')
      } else {
          res.status('403').json({message : 'Accès interdit : impossible de modifier un autre membre'});
          console.log('TRY 3')
          next(error);
      };

      const userToUpdate = req.body;
      const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
      const test = regexPassword.test(userToUpdate.password);
      console.log('TRY 4')

      if (test) {
        console.log('TRY 5')
          const saltRounds = 10;
          const hashedPassword = bcrypt.hashSync(userToUpdate.password, saltRounds);
          const userUpdated = await userDataMapper.updateUser(userId, {
            username: userToUpdate.username,
            email: userToUpdate.email,
            password: hashedPassword,
            });
          res.json({
              message: 'user updated',
              data: userUpdated
          });
      } else {
          res.json({
              message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
              data: userToUpdate.email
          });
      }
    } catch(error) {
        next(error);
    }
  },

};