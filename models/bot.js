const { model, Schema } = require("mongoose");

module.exports = model(
  "Bots",
  Schema({
    id: { type: String, required: true },
    ownerId: { type: String, default: "null" },
    guildId: { type: String, default: "null" },
    status: { type: String, default: "idle" },
    game: { type: String, default: "avar store." },
  })
);
