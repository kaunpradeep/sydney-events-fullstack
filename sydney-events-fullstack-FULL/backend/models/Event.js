const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  date: String,
  venue: String,
  description: String,
  city: { type: String, default: "Sydney" },
  source: String,
  eventUrl: String,
  status: { type: String, default: "new" },
  lastScrapedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Event", EventSchema);
