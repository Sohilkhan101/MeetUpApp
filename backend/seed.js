const express = require("express");
const mongoose = require("mongoose");
const Meetup = require("./models/meetup");

mongoose
  .connect("mongodb://localhost:27017/meetupApp")
  .then(() => console.log("Connected"))
  .catch(() => console.log("Error!!!!"));

const DUMMY_MEETUPS = [
  {
    title: "Technology",
    desc: "It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly make new friends, gather around the topics or hobbies you love, build It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly your professional network, or just have some fun.",
    img: "https://plus.unsplash.com/premium_photo-1661765147323-8aaecffa3a0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: "Delhi",
  },
  {
    title: "Education",
    desc: "It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun.It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly network, or just have some fun",
    img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    location: "Delhi",
  },
  {
    title: "Entertainment",
    desc: "It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly some fun It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun.",
    img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    location: "Delhi",
  },
  {
    title: "Gadgets",
    desc: "It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly fun It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun.",
    img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    location: "Delhi",
  },
  {
    title: "Electronics",
    desc: "It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your professional network, or just have some fun.",
    img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    location: "Delhi",
  },
];

const seedmeetup = async () => {
  await Meetup.deleteMany({});
  await Meetup.insertMany(DUMMY_MEETUPS);
  console.log("meetups SEEDED");
};

seedmeetup();
