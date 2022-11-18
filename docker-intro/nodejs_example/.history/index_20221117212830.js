const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('BYE BYE');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
