const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for getting user profile
router.get('/profile', authenticate, getUserProfile);

// Route for updating user profile
router.put('/profile', authenticate, updateUserProfile);

module.exports = router;