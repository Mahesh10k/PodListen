const Podcast = require("../models/uploadModel");


const getPodcastById = async (req, res) => {
  try {
    const podcast = await Podcast.find({_id:req.params.id});    
    if (!podcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }
    res.json(podcast);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports =  getPodcastById 
