/* Package required */
const express = require('express');

/* Local required */
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');
const newsController = require('../controllers/newsController');
const sectionController = require('../controllers/sectionController');
const imageController = require('../controllers/imageController');
const tagController = require('../controllers/tagController');
const authMW = require('../middleware/auth');
const modMW = require('../middleware/mod');
const adminMW = require('../middleware/admin');


/* Router */
const router = express.Router();

// Accessible without being connected
router.post('/login', loginController.login); // LOGIN
router.post('/user', userController.createNewUser); // CREATE USER
router.get('/user', userController.getAllUsers); // GET ALL USERS
router.get('/user/:id(\\d+)', userController.getOneUser); // GET USER BY ID
router.get('/news', newsController.getAllNews);  // GET ALL NEWS
router.get('/news/:id(\\d+)', newsController.getOneNews); // GET NEWS BY ID 
router.post('/searchNews', newsController.searchNews); // GET NEWS BY LINE-UP
router.post('/searchUser', userController.searchUsers); // GET USERS BY SEARCHBAR
router.get('/lineup', sectionController.getAllSections); // GET ALL LINES-UP
router.get('/lineup/:id(\\d+)', sectionController.getOneSection); // GET LINEUP BY ID
router.get('/tag', tagController.getAllTags); // GET ALL TAGS

// Accessible while connected

// Accessible only for ID user
router.patch('/user/:id(\\d+)', authMW, userController.updateUser); // MODIFY USER
router.delete('/user/:id(\\d+)', authMW, userController.deleteUser); // DELETE USER
router.post('/user/image/:id(\\d+)', authMW, imageController.uploadUserImg); // UPLOAD USER PROFIL PICTURE


// Accessible only for moderator
router.post('/news', modMW, newsController.createNews); // CREATE NEWS
router.patch('/news/:id(\\d+)', modMW, newsController.updateNews); // MODIFY NEWS
router.post('/news/image/:id(\\d+)', modMW, imageController.uploadNewsImg); // UPLOAD NEWS PICTURE
router.delete('/news/:id(\\d+)', modMW, newsController.deleteNews); // DELETE NEWS


// Accessible only for admin
router.post('/admin', loginController.adminLogin); // ADMIN LOGIN
router.post('/lineup', sectionController.createSection); // CREATE LINES-UP
router.patch('/lineup/:id(\\d+)', sectionController.updateSection); // MODIFY LINEUP BY ID
router.delete('/lineup/:id(\\d+)', sectionController.deleteSection); // DELETE LINEUP BY ID
router.post('/tag', tagController.createTag); // CREATE TAG
router.delete('/tag/:id(\\d+)', tagController.deleteTag); // DELETE TAG

// TEST
router.post('/test', modMW);

module.exports = router;

