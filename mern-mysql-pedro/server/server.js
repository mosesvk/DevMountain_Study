const express = require('express');
const app = express();
require('dotenv').config();
var colors = require('colors');

const db = require('./models');

const PORT = process.env.PORT || 8000;

db.sequelize.sync().then(() => {
  console.log(colors.bgMagenta('Connected to DB'));
  app.listen(PORT, () => console.log(colors.bgBlue(`Listening on PORT ${PORT}`)));
});
