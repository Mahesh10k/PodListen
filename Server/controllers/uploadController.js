const Podcast = require("../models/uploadModel");

const uploadPodcast = async (req, res) => {
  try {
    const { title, category } = req.body;

    // Get URLs from Cloudinary (Multer automatically provides 'path')
    const audioUrl = req.files["file"] ? req.files["file"][0].path : null;
    const thumbnailUrl = req.files["thumbnail"] ? req.files["thumbnail"][0].path : null;

    if (!audioUrl || !thumbnailUrl) {
      return res.status(400).json({ error: "Both audio and thumbnail are required!" });
    }

    const podcast = new Podcast({ title, category, audioUrl, thumbnailUrl });
    await podcast.save();

    res.status(201).json({ message: "Podcast uploaded successfully", podcast });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = uploadPodcast;
