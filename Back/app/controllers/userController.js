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
      const saltRounds = 10;
      const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
      const verification = regexPassword.test(newUser.password);
      if (!verification) {
        res.status('401').json({message: 'Votre mot de passe doit contenir au minimum une majuscule, un nombre et un caractère spéciale.'});
      };
      if (verification) {
        const hashedPassword = bcrypt.hashSync(newUser.password, saltRounds);
        const createdUser = await userDataMapper.createNewUser({
          username: newUser.username,
          email: newUser.email,
          password: hashedPassword,
        });
        const jwtContent = {userId: createdUser.id, roleId: createdUser.role_id};
          const jwtOptions = {
            algorithm: 'HS256',
            expiresIn: '3h'
          };
        res.status('200').json({
          message: 'new user created',
          data: createdUser,
          token: jwt.sign(jwtContent, process.env.JWTSECRET, jwtOptions)
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
      const token = req.headers.authorization.split(' ');
      const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
      const tokenRoleId = tokenDecoded.roleId;
      const tokenUserId = tokenDecoded.userId;
      // 1° Step Verif if user is admin or only member
      if (tokenRoleId === 3 || (tokenRoleId === 1 && tokenUserId == req.params.id)) {
        userId = req.params.id;
      } else {
          res.status('403').json({message : 'Accès interdit : impossible de modifier un autre membre'});
          next();
      };
      const userToUpdate = req.body;
      if (typeof userToUpdate.password == 'undefined' && typeof userToUpdate.email == 'undefined' && typeof userToUpdate.username == 'undefined' && typeof userToUpdate.section_id == 'undefined'){
        /* UPDATE ONLY ROLE */
        try {
          const userUpdated = await userDataMapper.updateRole(userId, {
            role_id: userToUpdate.role_id,
            });
            res.json({
              message: 'Utilisateur modifié avec succès',
              success: true,
              data: userUpdated,
            });
        } catch (error) {
          next();
        }
      } else if (typeof userToUpdate.password == 'undefined' && typeof userToUpdate.email == 'undefined' && typeof userToUpdate.username == 'undefined' && userToUpdate.section_id !== 0){
        /* UPDATE ONLY SECTION */
        try {
          const userUpdated = await userDataMapper.updateSection(userId, {
            section_id: userToUpdate.section_id,
            });
            res.json({
              message: 'Utilisateur modifié avec succès',
              success: true,
              data: userUpdated,
            });
        } catch (error) {
          next();
        }
      } else if (userToUpdate.password.length === 0 && userToUpdate.email.length === 0) {
        /* UPDATE ONLY NAME */
        try {
          const userUpdated = await userDataMapper.updateUsername(userId, {
            username: userToUpdate.username,
            });
            res.json({
              message: 'Utilisateur modifié avec succès',
              success: true,
              data: userUpdated
            });
        } catch (error) {
          next();
        }
      } else if (userToUpdate.username.length === 0 && userToUpdate.email.length === 0) {
        /* UPDATE ONLY PW */
        const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
        const pwverif = regexPassword.test(userToUpdate.password);
        // PW VERIF OK
        if (pwverif) {
          try {
            const saltRounds = 10;
            const hashedPassword = bcrypt.hashSync(userToUpdate.password, saltRounds);
            const userUpdated = await userDataMapper.updatePassword(userId, {
              password: hashedPassword,
              });
              res.json({
                message: 'Utilisateur modifié avec succès',
                success: true,
                data: userUpdated
              });
          } catch (error) {
            next();
          }
        } else {
          res.json({
            message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
            data: userToUpdate
          });
        }
      } else if (userToUpdate.password.length === 0 && userToUpdate.username.length === 0) {
        /* UPDATE ONLY EMAIL */
        try {
          const userUpdated = await userDataMapper.updateEmail(userId, {
            email: userToUpdate.email,
            });
            res.json({
              message: 'Utilisateur modifié avec succès',
              success: true,
              data: userUpdated
            });
        } catch (error) {
          next();
        }
      } else if (userToUpdate.email.length === 0) {
        /* UPDATE NAME & PASSWORD */
        const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
        const pwverif = regexPassword.test(userToUpdate.password);
        // PW VERIF OK
        if (pwverif) {
          try {
            const saltRounds = 10;
            const hashedPassword = bcrypt.hashSync(userToUpdate.password, saltRounds);
            const userUpdated = await userDataMapper.updateNamePassword(userId, {
              username: userToUpdate.username,
              password: hashedPassword,
              });
              res.status('200').json({
                message: 'Utilisateur modifié avec succès',
                success: true,
                data: userUpdated
              });
          } catch (error) {
            next();
          }
        } else {
          res.json({
            message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
            data: userToUpdate
          });
        }
      } else if (userToUpdate.password.length === 0 && userToUpdate.section_id.lengeth === 0) {
        /* UPDATE NAME & MAIL */
        try { 
          const userUpdated = await userDataMapper.updateNameMail(userId, {
            username: userToUpdate.username,
            email: userToUpdate.email,
            });
            res.status(200).json({
              message: 'Utilisateur modifié avec succès',
              success: true,
              data: userUpdated
            });
        } catch {
          next();
        }
      } else if (userToUpdate.username.length === 0) {
        /* UPDATE PASSWORD & MAIL */
        const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
        const pwverif = regexPassword.test(userToUpdate.password);
        // PW VERIF OK
        if (pwverif) {
          try {
            const saltRounds = 10;
            const hashedPassword = bcrypt.hashSync(userToUpdate.password, saltRounds);
            const userUpdated = await userDataMapper.updatePasswordMail(userId, {
              password: hashedPassword,
              email: userToUpdate.email,
              });
              res.json({
                message: 'Utilisateur modifié avec succès',
                success: true,
                data: userUpdated
              });
          } catch (error) {
            next();
          }
        } else {
          res.json({
            message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
            data: userToUpdate
          });
        }
      } else {
        /* UPDATE ALL */
        const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
        const pwverif = regexPassword.test(userToUpdate.password);
        // PW VERIF OK
        if (pwverif) {
          try {
            const saltRounds = 10;
            const hashedPassword = bcrypt.hashSync(userToUpdate.password, saltRounds);
            const userUpdated = await userDataMapper.updateUser(userId, {
              username: userToUpdate.username,
              email: userToUpdate.email,
              password: hashedPassword,
              });
              res.json({
                message: 'Utilisateur modifié avec succès',
                success: true,
                data: userUpdated
              });
          } catch (error) {
            next();
          }
        } else {
          res.json({
            message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
            data: userToUpdate
          });
        }
      }
    } catch(error) {
      return next(error);
    }
  },

  /* Delete user */
  async deleteUser(req, res, next) {
    try {
      const token = req.headers.authorization.split(' ');
      const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
      const tokenRoleId = tokenDecoded.roleId;
      const tokenUserId = tokenDecoded.userId;
      // 1° Step Verif if user is admin or only member
      if (tokenRoleId === 3 || (tokenRoleId === 1 && tokenUserId == req.params.id)) {
        userId = req.params.id;
      } else {
          res.status('403').json({message : 'Accès interdit : impossible de supprimer un autre membre'});
          next(error);
      };
      const deleteUserId = userId;
      const userDeleted = await userDataMapper.deleteUser(deleteUserId);
            res.json({
                message: 'deleted user',
                data: userDeleted
            });
    } catch(error){
      next(error);
    }
  },

  /* Get all streamers */
  async getStreamers(req, res, next) {
    try {
        const allStreamers = await userDataMapper.getAllStreamers();
        res.status('200').json({
            data: allStreamers
        });
    } catch(error) {
        next(error);
    }
  },

};