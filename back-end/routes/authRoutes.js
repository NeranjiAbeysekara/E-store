const express = require('express');
const { 
  signup, 
  login, 
  verifyEmail, 
  forgotPassword, 
  resetPassword, 
  adminLogin 
} = require('../controllers/authController'); // Added adminLogin
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify-email/:token', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', protect, resetPassword);
router.post('/admin-login', adminLogin); // New route for admin login

module.exports = router;

