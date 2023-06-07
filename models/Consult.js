const { Schema, model } = require("mongoose");

const schema = new Schema({
  number: { type: String, required: true },
  problems: { type: String, required: true },
});

module.exports = model("Consult", schema);
