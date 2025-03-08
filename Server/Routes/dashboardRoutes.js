let express=require("express")
let cors=require("cors")
let router=express.Router()
let uploadController=require("../controllers/uploadController.js")

router.get("/",(req,res)=>{
    res.send({data:"Dashboard data fetched"})
})


router.get("/search",(req,res)=>{
    res.send({
        data:"searched Data Found"
    })
})

router.get("/trending",(req,res)=>{
    res.send({
        data:"these are Trending Podcasts come from Backend"
    })
})

router.post("/upload", uploadController.uploadFile)

module.exports=router