const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      unique: true,
    },
    location: {
      type: String,
    },
    photo: {
      type: String,
    },
    description: {
      type: String,
    },
  }
  ,
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("destination", destinationSchema);