let express=require("express")
let router=express.Router()
let uploadPodcast=require("../controllers/uploadController.js")
let getPodcasts=require("../controllers/dashboardController")
let upload=require("../Middlewares/Multer")
let getPodcastById=require("../controllers/podcastByIdController")
let PodcastByCategory=require("../controllers/categorisedController")
const getPodcastByTitle = require("../controllers/searchController")
const trendingPodcasts=require("../controllers/trendingPodControllers")

// Route for get all Podcasts data
router.get("/",getPodcasts)

// Route to Search Podcast by Category
router.get("/search/category/:category",PodcastByCategory)

// Route for Trending Podcasts
router.get("/trending",trendingPodcasts)

//Router to get Podcast by Title
router.get("/title/:title",getPodcastByTitle)

// Router to get Podcast by Id
router.get("/podcast/:id",getPodcastById)
 
// Route to Insert Data
router.post("/upload", upload.fields([
    { name: "file", maxCount: 1 }, // Audio file
    { name: "thumbnail", maxCount: 1 } // Thumbnail image
  ]),
  uploadPodcast
);






  


module.exports=router