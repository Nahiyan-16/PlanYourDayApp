const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
  password: {
    type: String,
    required: true,
  },
  // You can add other user-related fields as needed
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);