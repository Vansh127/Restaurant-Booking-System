const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  remarks: { type: String }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
