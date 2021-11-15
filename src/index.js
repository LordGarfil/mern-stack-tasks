const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { mongoose } = require('./db')

require('dotenv').config();

// Settings
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'))
app.use(express.json())

app.listen(app.get('port'), ()=>{
  console.log('listening on port', process.env.PORT);
})

// app.use(express.static(path.join(__dirname, 'public', '')))

// Routes
app.use('/task', require('./routes/taskRoute'))