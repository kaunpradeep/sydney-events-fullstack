const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  email: String,
  eventId: String,
  consent: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
