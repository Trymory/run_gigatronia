const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;