const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const Subscription = require("../models/Subscription");

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post("/subscribe", async (req, res) => {
  const { email, eventId, consent } = req.body;
  await Subscription.create({ email, eventId, consent });
  res.json({ message: "Subscription saved" });
});

module.exports = router;
