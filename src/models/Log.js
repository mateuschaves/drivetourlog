const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  app: {
    type: String,
    required: true
  },
  error: {
    type: String,
    required: true
  },
  androidId: String,
  androidApiLevel: Number,
  locationEnable: Boolean,
  powerState: {
    lowPowerMode: Boolean,
    batteryLevel: Number,
    batteryState: String
  },
  systemVersion: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Log", LogSchema);
