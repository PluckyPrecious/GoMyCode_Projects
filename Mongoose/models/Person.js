const mongoose = require("mongoose");

//Creating a person prototype
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

module.exports = mongoose.model("person", personSchema);