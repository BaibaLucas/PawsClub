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
router.post('/api/login', loginController.login); // LOGIN
router.post('/api/user', userController.createNewUser); // CREATE USER
router.get('/api/user', userController.getAllUsers); // GET ALL USERS
router.get('/api/user/:id(\\d+)', userController.getOneUser); // GET USER BY ID
router.get('/api/news', newsController.getAllNews);  // GET ALL NEWS
router.get('/api/news/:id(\\d+)', newsController.getOneNewsId); // GET NEWS BY ID
router.get('/api/news/:slug', newsController.getOneNewsSlug); // GET NEWS BY SLUG
router.post('/api/searchNews', newsController.searchNews); // GET NEWS BY LINE-UP
router.post('/api/searchUser', userController.searchUsers); // GET USERS BY SEARCHBAR
router.get('/api/lineup', sectionController.getAllSections); // GET ALL LINES-UP
router.get('/api/lineup/:id(\\d+)', sectionController.getOneSectionId); // GET LINEUP BY ID
router.get('/api/lineup/:slug', sectionController.getOneSectionSlug); // GET LINEUP BY SLUG
router.get('/api/tag', tagController.getAllTags); // GET ALL TAGS
router.get('/api/streams', userController.getStreamers); // GET ALL STREAMERS

// Accessible while connected

// Accessible only for ID user
router.patch('/api/user/:id(\\d+)', authMW, userController.updateUser); // MODIFY USER
router.delete('/api/user/:id(\\d+)', authMW, userController.deleteUser); // DELETE USER
router.post('/api/user/image/:id(\\d+)', authMW, imageController.uploadUserImg); // UPLOAD USER PROFIL PICTURE


// Accessible only for moderator
router.post('/api/news', modMW, newsController.createNews); // CREATE NEWS
router.patch('/api/news/:id(\\d+)', modMW, newsController.updateNews); // MODIFY NEWS
router.post('/api/news/image/:id(\\d+)', modMW, imageController.uploadNewsImg); // UPLOAD NEWS PICTURE
router.delete('/api/news/:id(\\d+)', modMW, newsController.deleteNews); // DELETE NEWS


// Accessible only for admin
router.post('/api/admin', loginController.adminLogin); // ADMIN LOGIN
router.post('/api/lineup', sectionController.createSection); // CREATE LINES-UP
router.patch('/api/lineup/:id(\\d+)', sectionController.updateSection); // MODIFY LINEUP BY ID
router.post('/api/lineup/image/:id(\\d+)', imageController.uploadSectionImg); // UPLOAD SECTION PICTURE
router.delete('/api/lineup/:id(\\d+)', adminMW, sectionController.deleteSection); // DELETE LINEUP BY ID
router.post('/api/tag', tagController.createTag); // CREATE TAG
router.delete('/api/tag/:id(\\d+)', tagController.deleteTag); // DELETE TAG

// TEST
router.post('/test', modMW);

module.exports = router;

