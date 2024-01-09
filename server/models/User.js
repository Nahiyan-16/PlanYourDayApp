const mongoose = require("mongoose");

// Define the Schedule schema
const scheduleSchema = new mongoose.Schema({
  // Define fields for each event in the schedule
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventTitle: {
    type: String,
    required: true,
  },
  eventBody: {
    type: String,
    required: false,
  },
});
// Add

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
  username: {
    type: String,
    required: true,
  },
  schedule: [scheduleSchema],
  // You can add other user-related fields as needed
});

// Create and export the User model
module.exports = mongoose.model("User", userSchema);
