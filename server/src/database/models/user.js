const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo: String,
  bib: String,
  age: String,
  gender: String,
  time: String,
  score: String,
  strength: String,
  endurance: String,
  dexterity: String,
  desitionMaking: String,
  skills: Array
});

module.exports = mongoose.model("User", userSchema);
