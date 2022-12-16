const express = require("express");

const mongoose = require("mongoose");

const meetupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    require: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Meetup = mongoose.model("Meetup", meetupSchema);

module.exports = Meetup;
