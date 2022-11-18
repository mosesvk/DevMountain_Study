const express = require('express');
const app = express();
const colors = require('colors');
const db = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();

// body-parser Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.json());
app.use(express.json())
app.use(cors()) // this helps with connecting to the frontend 

// MIDDLEWARE
const postRoutes = require('./routes/Posts');
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 8000;
db.sequelize
  .sync()
  .then(() => {
    console.log(colors.bgMagenta('Connected to DB'));
    app.listen(PORT, () =>
      console.log(colors.bgBlue(`Listening on PORT ${PORT}`))
    );
  })
  .catch((err) => console.error(err));