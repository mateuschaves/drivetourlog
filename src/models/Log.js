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
  LocationEnable: Boolean,
  PowerState: {
    batteryLevel: Number,
    batteryState: String,
    lowPowerMode: Boolean
  },
  systemVersion: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Log", LogSchema);
