/* Package required */
const express = require('express');

/* Local required */
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');

/* Router */
const router = express.Router();

// Accessible without being connected
router.post('/login', loginController.login); // LOGIN
router.post('/user', userController.createNewUser); // CREATE USER
router.get('/user'); // GET ALL USERS
router.get('/user/:id'); // GET USER BY ID
router.get('/news');  // GET ALL NEWS
router.get('/news/:id'); // GET NEWS BY ID 
router.post('/searchNews'); // GET NEWS BY LINE-UP
router.post('/searchUser'); // GET USERS BY SEARCHBAR
router.get('/lineup'); // GET ALL LINES-UP
router.get('/lineup/:id'); // GET LINEUP BY ID

// Accessible while connected

// Accessible only for ID user
router.patch('/user/:id'); // MODIFY USER
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

module.exports = router;

