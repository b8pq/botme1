const { Schema, model } = require("mongoose");

module.exports = model(
  "protection backup",
  Schema({
    id: { type: String, required: true },
    categories: { type: Array, default: [] },
    channels: { type: Array, default: [] },
    roles: { type: Array, default: [] },
  })
);
