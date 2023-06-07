const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  text: {
    type: "string",
    required: ["true", "input can not be empty"],
  },
});

module.exports = mongoose.model("TodoSchema", schema);
