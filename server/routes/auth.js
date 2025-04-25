const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error.message);
    return res.status(500).json({ message: 'Signup failed', error: error.message });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      return res.status(200).json({ message: 'Login successful' });
    } catch (err) {
      console.error('Login error:', err.message);
      return res.status(500).json({ message: 'Login failed', error: err.message });
    }
  });
  

module.exports = router;
