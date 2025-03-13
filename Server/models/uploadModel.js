const mongoose = require("mongoose");

const PodcastSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  audioUrl: { type: String, required: true },
  thumbnailUrl:{ type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Podcast", PodcastSchema);