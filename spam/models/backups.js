const mongoose = require("mongoose");

module.exports = mongoose.model("Backup System", mongoose.Schema({
  id: { type: String, required: true },
  backups: { type: Array, default: [] }
}));