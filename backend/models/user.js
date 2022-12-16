const mongoose = require("mongoose");
const passportlocalmongoose = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({});
userSchema.plugin(passportlocalmongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
