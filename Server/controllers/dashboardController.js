let Podcast=require("../models/uploadModel")


const getAllPodcasts = async (req, res) => {
    try {
      const podcasts = await Podcast.find().sort({ createdAt: -1 });
      res.json(podcasts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports=getAllPodcasts
  