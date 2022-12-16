const express = require("express");
const router = express.Router();
const meetup = require("../models/meetup");

router.get("/allmeetups", async (req, res) => {
  try {
    const meetups = await meetup.find({});
    res.status(200).json(meetups);
  } catch (e) {
    res.status(500).json({ message: "something went wrong while fetching meetups" });
  }
});

module.exports = router;
