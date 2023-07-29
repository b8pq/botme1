const { model, Schema } = require("mongoose");

module.exports = model("Users", Schema({
  id: { type: String, required: true },
  guildId: { type: String, required: true },
  mute: {
    reason: { type: String, default: "null" },
    time: { type: Number, default: 0 },
    s_time: { type: Number, default: 0 }
  },
  vmute: {
    reason: { type: String, default: "null" },
    time: { type: Number, default: 0 },
    s_time: { type: Number, default: 0 },
    muted: { type: Boolean, default: false }
  },
  prison: {
    reason: { type: String, default: "null" },
    time: { type: Number, default: 0 },
    s_time: { type: Number, default: 0 },
    unlimited: { type: Boolean, default: false }
  },
  xp: {
    voice: { type: Number, default: 0 },
    text: { type: Number, default: 0 }
  },
  tblack: { type: Boolean, default: false }
}));