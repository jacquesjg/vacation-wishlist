const ObjectId = require('mongodb').ObjectId;

const getAllDestinations = async (req, res) => {
  const destinations = await req.app.locals.collection
    .find()
    .toArray();
  res.json({ message: "success", destinations: destinations });
};

const updateDestination = async (req, res) => {
  const updatedItem = await req.app.locals.collection.findOneAndUpdate(
    {
      _id: ObjectId(req.body.id)
    },
    {
      $set: {
        destination: req.body.destination,
        location: req.body.location,
        photo: req.body.photo,
        description: req.body.description
      }
    },
    {
      "returnDocument": "after",
      "returnOriginal": false
    });
  res.json({ message: "success", updatedItem: updatedItem.value })
}

const addDestination = async (req, res) => {
  req.app.locals.collection
    .insertOne(req.body, (err, result) => {
      err ? console.log(err) : res.json({
        message: "success",
        result: result,
        created: req.body
      });
    });
}

const deleteDestination = async (req, res) => {
  const removed = await req.app.locals.collection.deleteOne({ _id: ObjectId(req.body) });
  res.json({ message: "success", result: removed })
}

module.exports = {
  getAllDestinations,
  updateDestination,
  addDestination,
  deleteDestination
}
