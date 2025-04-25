const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/restaurantDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected to restaurantDB'))
.catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
