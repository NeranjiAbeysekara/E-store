const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false }, // Keeps user verification
  resetPasswordToken: String, // Keeps password reset functionality
  resetPasswordExpires: Date, // Keeps expiration for password reset
  isAdmin: { type: Boolean, default: false }, // New field for admin users
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);



