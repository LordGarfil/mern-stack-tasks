const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.HOST)
.then(db => console.log("Db connected"))
.catch(err => console.warn(err))

module.exports = mongoose