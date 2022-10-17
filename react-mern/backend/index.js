import app from './server';
const {MongoClient} = require('mongodb');
import dotenv from 'dotenv';

dotenv.config();

// const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 5000;


const connection = async() => {
  const uri = process.env.REST_REVIEWS_DB_URI


}
MongoClient.connect(process.env.REST_REVIEWS_DB_URI, {
  poolSize: 50,
  wtimeout: 2500,
  useNewUrlParse: true,
})
  .catch((err) => {
    console.error(err.stack);d
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`Listening on Port ${port}`);
    });
  });
