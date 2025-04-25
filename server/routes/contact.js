const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  const { name, email, remarks } = req.body;

  try {
    const newContact = new Contact({ name, email, remarks });
    await newContact.save();
    return res.status(201).json({ message: 'Message received. Thank you!' });
  } catch (err) {
    console.error('Contact form submission error:', err.message);
    return res.status(500).json({ message: 'Failed to submit contact form', error: err.message });
  }
});

module.exports = router;
