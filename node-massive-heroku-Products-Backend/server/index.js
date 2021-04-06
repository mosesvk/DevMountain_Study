require('dotenv').config();
const massive = require('massive');
const express = require('express');
const ctrl = require('./products_controller.js');

const app = express();


const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
      .then(dbInstance => {
        app.set("db", dbInstance);
        app.listen(SERVER_PORT, () => {
            console.log(`Da server is listening on ${SERVER_PORT} mon.`)
        });
      })
      .catch(err => console.log(err));


app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.put('/api/products/:id', ctrl.update)
app.post('/api/products', ctrl.create)
app.delete('/api/products/:id', ctrl.delete)
