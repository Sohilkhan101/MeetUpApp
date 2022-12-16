const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const meetupApi = require("./apis/meetupApi");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/user");
const newMeetup = require("./models/meetup");
const { redirect } = require("react-router");
const LocalStrategy = require("passport-local");

mongoose
  .connect("mongodb://localhost:27017/meetupApp")
  .then(() => console.log("Connected"))
  .catch(() => console.log("Error!!!!"));

//----------------------------------------------------------Imports Ends------------------

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
  })
);

app.use(meetupApi);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sessionConfig = {
  secret: "weneedabettersecret",
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //   // secure: true,
  //   httpOnly: true,
  //   maxAge: 1000 * 60 * 60 * 24 * 7 * 1,
  // },
};

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//----------------------------------------------------------Middlewares End------------------

// routes
// app.post("/login", async (req, res, next) => {
//   // // const newuser = await User.register(username, password);
//   // if (req.isAuthenticated) {
//   //   res.status(200).json({ message: "Logged in Successfully" });
//   // } else {
//   //   res.status(401).json({ message: "Not Logged in...." });
//   // }

//   passport.authenticate("local", function (err, user) {
//     if (err) {
//       console.log("err");
//       res.status(401).json({ message: "Not Logged in...." });
//     } else {
//       res.status(200).json({ message: "Logged in Successfully" });
//     }
//   });
// });

app.post("/login", (req, res) => {
  res.status(200).json({ message: "Logged in Successfully" });
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("user already Exist");
    if (!doc) {
      const newUser = new User({
        username: req.body.username,
      });
      const userr = await User.register(newUser, req.body.password);
      // console.log(userr);
      // console.log("User Created ...........");
      return res.status(200).json({ message: "User Created ..........." });
    }
  });
});
// app.get("/logout", (req, res) => {
//   req.logout();
//   return res.status(200).json({ message: "Logged Out ..........." });
// });

app.post("/newmeetup", (req, res) => {
  console.log(req.body);
  newMeetup.insertMany({ title: req.body.title, desc: req.body.desc, location: req.body.location }, async (err, doc) => {
    if (err) throw err;
    else {
      return res.status(200).json({ message: "Meeting Created" });
    }
  });
});

app.delete("/delete", async (req, res) => {
  try {
    const post = await newMeetup.findById(req.body.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//----------------------------------------------------------Routs Ends------------------

app.get("*", (req, res) => {
  res.send("Wrong URL Request");
});

app.listen(3000, () => {
  console.log("Server Started and listen at port 3000");
});
