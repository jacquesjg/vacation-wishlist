require("dotenv").config();
const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const cors = require("cors");
const app = express();

MongoClient.connect(process.env.MONGO_DB, { useNewUrlParser: true }, function (err, client) {
  const db = client.db('vacation-wishlist');
  const collection = db.collection('destinations');
  app.locals.collection = collection;
  if (err) {
    console.log(err.message);
  }
})

const cardsRouter = require('./routes/cards/cardsRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/cards', cardsRouter);

app.get("/", (req, res) => {
  res.send("Request");
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
})