const express = require('express');

const app = express();

const { loginUser, signupUser } = require('../controllers/userCtrl.js');

// login route
app.route('/login').post(loginUser);

// signup route
app.route('/signup').post(signupUser);

module.exports = app;
