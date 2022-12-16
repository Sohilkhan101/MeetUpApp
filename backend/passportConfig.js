// const User = require("./models/user");
// const bcrypt = require("bcryptJs");
// const LocalStrategy = require("passport-local").Strategy;

// async function config(passport) {
//   passport.use(
//     new LocalStrategy(async (username, password, done) => {
//       const user = await User.findOne({ username: username });
//       if (!user) return done(null, false, { meassage: "No User With This Username" });

//       bcrypt
//         .compare(password, user.password)
//         .then((match) => {
//           if (match) return done(null, user, { meassage: "Logged In Succesfully" });

//           return done(null, { meassage: "Something went wrong" });
//         })
//         .catch((err) => {
//           return done(null, false, { message: " Something went wrong" });
//         });
//     })
//   );

//   passport.serializeUser((user, done) => {
//     done(null, user._id);
//   });
//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//       done(err, user);
//     });
//   });
// }

// module.exports = config;
