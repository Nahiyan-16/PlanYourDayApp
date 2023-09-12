// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // For serving static files
const User = require('./models/User'); // Import the User model
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3001; // Backend server port

require('dotenv').config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your-database-name' with your actual database name)
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.u1xane1.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// API routes (backend)
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user with the given email exists in the database
    const user = await User.findOne({ email });

    // If no user with the email is found, return an error
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the provided password matches the user's stored password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // At this point, the email and password are valid, and the user is authenticated.
    // You can generate a token for the user, set up a session, or perform any other
    // authentication actions here.
    
    // For demonstration purposes, you can send a success message
    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash the password (using bcrypt or your preferred library)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});

// Serve the React frontend (build) as a static asset
app.use(express.static(path.join(__dirname, '../build')));

// Handle React routing, return all requests to the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});