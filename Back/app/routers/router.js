/* Package required */
const express = require('express');

/* Local required */
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');
const newsController = require('../controllers/newsController');
const sectionController = require('../controllers/sectionController');
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

// Accessible while connected

// Accessible only for ID user
router.patch('/user/:id(\\d+)', authMW, userController.updateUser); // MODIFY USER
router.delete('/user/:id'); // DELETE USER

// Accessible only for moderator
router.post('/news'); // CREATE NEWS
router.patch('/news/:id'); // MODIFY NEWS
router.delete('/news/:id'); // DELETE NEWS


// Accessible only for admin
router.post('/admin'); // ADMIN LOGIN
router.post('/lineup'); // CREATE LINES-UP
router.patch('/lineup/:id'); // MODIFY LINEUP BY ID
router.delete('/lineup/:id'); // DELETE LINEUP BY ID

// TEST 
router.post('/test', modMW);

module.exports = router;

