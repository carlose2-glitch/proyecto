const express = require('express');

const app = express();

const path = require('path');

const mongoose = require('mongoose');

require('dotenv').config();

//conectar con mongo db
(async() => {
  try {
    await mongoose.connect(process.env.MONGO_DEV_URI);
    console.log('Conecto a mongoDB');
  } catch (error) {
    console.log(error);
    console.log('no conecto a mongoDB');
  }

})();

//Rutas frontend

app.use('/styles', express.static(path.resolve(__dirname, 'views', 'styles')));
app.use('/', express.static(path.resolve(__dirname, 'views', 'home')));
app.use('/signup', express.static(path.resolve(__dirname, 'views', 'signup')));

//Rutas backend

module.exports = app;