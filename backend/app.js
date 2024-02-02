const express = require('express');
const app = express();
const cookie = require('cookie-parser');
const cors = require('cors');
const users = require('./routes/userAuth');
const farmers = require('./routes/farmerAuth');

app.use(cors());
  

app.use(express.json({ limit: '1000mb' }));
app.use(express.urlencoded({ limit: '1000mb', extended: true }));
app.use(cookie());

app.use('/api/v1/user/', users)
app.use('/api/v1/farmer/', farmers)

module.exports = app;