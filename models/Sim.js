const mongoose = require("mongoose");

const SimSchema = new mongoose.Schema(
  {
    iccid: { type: String, required: true, default: "0" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sim", SimSchema);
