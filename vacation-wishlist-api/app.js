require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    console.log('MONGODB CONNECTED');
  })
  .catch((e) => {
    console.log(e);
  });


const destinationsRouter = require('./routes/destinations/destinationsRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/destinations', destinationsRouter);

app.get("/", (req, res) => {
  res.send("Vacation Wishlist API");
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
})