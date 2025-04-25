const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');  

router.post('/', async (req, res) => {
  const { name, email, phone, date, time, guests, specialRequests } = req.body;

  try {
    const newBooking = new Booking({
      name,
      email,
      phone,
      date,
      time,
      guests,
      specialRequests,
    });

    await newBooking.save();
    return res.status(201).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error('Booking error:', error.message);
    return res.status(500).json({ message: 'Failed to create booking', error: error.message });
  }
});

module.exports = router;
