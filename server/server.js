const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

require('./db');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const itemRoutes = require('./routes/items');
const bookingRoutes = require('./routes/bookings');

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
