const express = require('express');
const app = express();
const cookie = require('cookie-parser');
const cors = require('cors');
const users = require('./routes/userAuth');
const farmers = require('./routes/farmerAuth');
const product = require('./routes/product')
const bank = require('./routes/bank')
const conv = require('./routes/ChatFeat.js/conversations')
const mess = require('./routes/ChatFeat.js/message');
const transac =  require('./routes/transac')
app.use(cors());
  

app.use(express.json({ limit: '1000mb' }));
app.use(express.urlencoded({ limit: '1000mb', extended: true }));
app.use(cookie());

app.use('/api/v1/', users)
app.use('/api/v1/farmer/', farmers)
app.use('/api/v1/', product)
app.use('/api/v1/', bank)
app.use('/api/v1/', conv)
app.use('/api/v1/', mess)
app.use('/api/v1/', transac)


module.exports = app;