const Destination = require('../model/Destination');


const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({})
    return res.json({ message: "success", payload: destinations });

  } catch (e) {
    return res.status(500).json({ error: e.message })
  }
}


const addDestination = async (req, res) => {
  const {
    destination,
    location,
    photo,
    description
  } = req.body;

  try {
    const createdDestination = new Destination({
      destination,
      location,
      photo,
      description,
    });

    const savedDestination = await createdDestination.save();
    return res.json({ message: "success", payload: savedDestination });

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}


const updateDestination = async (req, res) => {
  const { body: payload, body: { id: id } } = req;

  try {
    const updatedDestination = await Destination.findByIdAndUpdate(id, payload);
    if (!updatedDestination) {

      return res
        .status(404)
        .json({ message: "failure", error: "record not found" });

    } else {
      return res.json({ message: "success", payload: updatedDestination });
    }

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}


const deleteDestination = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedDestination = await Destination.findByIdAndRemove(id);

    if (!deletedDestination) {

      return res
        .status(404)
        .json({ message: "failure", error: "record not found" });

    } else {
      return res.json({ message: "success", payload: deletedDestination });
    }

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}


module.exports = {
  getAllDestinations,
  addDestination,
  updateDestination,
  deleteDestination
}
